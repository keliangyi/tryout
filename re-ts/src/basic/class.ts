
type State = { [key:string ]: string }

class StringDb {
    state:State = {}

    get(key:string):string | null{
        return key in this.state ? this.state[key] : null
    }
    set(key:string,value:string):void{
        this.state[key] = value
    }

    static from(state:State){
        const db = new StringDb
        for (let k in state){
            db.set(k, state[k])
        }
        return db
    }
}

type c = StringDb
type d = typeof StringDb



class MyMap<T,U> {
    static of<T1>(k:T1){ //静态成员不能引用类类型参数。

    }
    
    set(k:T,v:U){

    }
}

class User {
    constructor( // public、private、protected 会自动绑定到this 上
        protected name : string,
        public readonly age : number,
        private sex :string = 'male'
    ){

    }

    log(){
        console.log(`大家好，我叫${this.name}，今年${this.age}岁了`);        
    }
}


const maomao = new User('m0=aomao',29)
maomao.log()