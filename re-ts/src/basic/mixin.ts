    
type ClassConstructor<T> = new(...args:any[]) => T

function withEZDebug<C extends ClassConstructor<{
    getDebugValue():object
}>>(Class:C) {
    return class extends Class {
        constructor(...args:any[]){
            super(...args)
        }
        debug(){            
            // const name = Class.constructor.name
            const name = Class.toString().split('(')[0].split(' ')[1]
            const value = this.getDebugValue()
            const res = `${name}(${JSON.stringify(value)})`
            console.log(res)            
            return res
        }
    }
}

class TestMixin {
    constructor(
        private name:string,
        private age:number,
        private sex:string,
        private likes:string[] = [ '吃饭', '睡觉'],
    ){

    }

    getDebugValue(){
        return {
            name:this.name,
            age:this.age,
            sex:this.sex,
            likes:this.likes,
        }
    }
}
const MixinUser = withEZDebug(TestMixin)
const user = new MixinUser('maomao', 9, '男')

user.debug()

