class User {
    public type:string = 'person' // 类变量
    constructor( // public、private、protected 会自动绑定到this 上
        protected name : string, // 实例变量
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
maomao.type

// type SB = 's' | 'b'
/** 
 * 类既声明值也声明类型（和枚举相同）,其他的类型和值在不同的命名空间中
 * 类会声明两种类型：实例类型和构造方法类型（typeof Class）
 * */ 
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
type c = StringDb  // 实例类型
type d = typeof StringDb // 构造方法类型


// 类的泛型
class MyMap<T,U> {
    static of<T1>(k:T1){ //静态成员不能引用类类型参数。

    }
    
    set(k:T,v:U):this{
        // ... 
        return this
    }
}


/**
 * 模拟final(私有构造方法):不可实例化、不可扩展（extends）
 * 若只想不可实例化就是要抽象类 abstract
 * MessageQueue.crate() 来实例化，但是不可扩展
 */
class MessageQueue {
    private constructor(private msg:string[]){} 

    crate(){
        return new MessageQueue([])
    }
}

// class Child extends MessageQueue {}
// const m = new MessageQueue() // 




class Controler {
    base(){
        return 'base'
    }
}

class User1 extends Controler {
    age:number
    constructor(){
        super()
        this.age = this.getAge()
    }
    
    static getSb () {

    }

    protected getInfo(){

    }

    private getAge(){
        return 45
    }

}
const u = new User1()    
console.log(Object.keys(Object.getPrototypeOf(u))); // 获取实例方法名 不包含继承来的和静态方法， 但是无法区分public、 private 和 protected
