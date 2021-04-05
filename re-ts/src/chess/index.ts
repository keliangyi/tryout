
type Color = 'Blank' | 'White'
type IFile = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H' // x轴坐标
type IRank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 // y轴坐标

class Game { // 一局游戏
    private pieces = Game.makePieces()

    private static makePieces(){
        return [
            new King("White",'E',1),
            new King("Blank",'E',8),
        ]
    }
}


class Position { // 一个棋子的一组坐标
    constructor(
        private file : IFile,
        private rank : IRank
    ){

    }

    distanceFrom(position:Position){
        return {
            rank:Math.abs(position.rank - this.rank),
            file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0))
        }
    }  
}


abstract class Piece { // 棋子
    protected position:Position 

    constructor(
        private readonly color:Color,
        file:IFile,
        rank:IRank
    ){
        this.position = new Position(file, rank)
    }

    abstract canMoveTo(positon:Position):boolean

    moveTo (positon:Position) {
        this.position = positon
    }
     
}   

class King extends Piece {
    canMoveTo(position:Position){
        const distance = this.position.distanceFrom(position)
        return distance.rank < 2 && distance.file < 2
    }


}
