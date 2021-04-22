const arrs = [0,1,2,3]

const numberArr = new Proxy(arrs,{  
    get(target,props){
        const idx = Number(props)
        if(!isNaN(idx)){
            if(idx < target.length){
                return target[idx] + 2
            }
            throw new Error(`该数组的长度为：${target.length}，但你输入了：${idx}`)            
        }
        //@ts-ignore
        return target[props]
    },
    set(target,props,value){
        const idx = Number(props)        
        if(typeof value === 'number'){
            target[idx] = value
            return true
        }
        return false // push过后还会调用 length 不能  return false ，没这么简单
    }
})

// numberArr.push(44)
// console.log(numberArr);

const o = {
    name:'maomao',
    age:45,
    _password:'mm11223',
    getPwd(){
        return `my name is ${this._password}`
    }
}

const proxyUser = new Proxy(o,{
    get(target,props){
        if((props as string).startsWith('_')){
            throw new Error("没有权限");
        }
        const v = target[props as keyof typeof target]
        return typeof v === 'function' ? (v as Function).bind(target) : v 
    }
})


// console.log(proxyUser._password);
// console.log(proxyUser.getPwd());



