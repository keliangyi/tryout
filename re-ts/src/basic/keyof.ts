
namespace KeyOf {
    type User = {
        id:number
        name:string
        friendList:{
            firstName:string
            lastName:string
        }[]
    }
    
    type K = keyof User 
    type C = User['friendList'][0]['firstName'] // 键入
    const key:K = 'friendList'
    
    const getUser = <O extends Partial<User>,K extends keyof User>(o:O,k:K):O[K] => {    
        return o[k]
    }
    
    
    getUser({ name:"dd" },'id')
    
    const get = <O extends object,K extends keyof O>(o:O,k:K):O[K] => {    
        return o[k]
    }
    
    type KGet = {
        <O extends object, K1 extends keyof O>(o:O, k1:K1):O[K1]
        <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(o:O, k1:K1,k2:K2):O[K1][K2]
        <O extends object, K1 extends keyof O, K2 extends keyof O[K1], K3 extends keyof O[K1][K2] >(o:O, k1:K1,k2:K2,k3:K3):O[K1][K2][K3]
    }
    
    const myObj:User = {
        id:1,
        name:"毛毛",
        friendList:[
            { firstName:"J", lastName:"Jack", },
            { firstName:"T", lastName:"Tom", },
        ]
    }
    
    const superGet:KGet = (obj:any, ...keys:string[]) => {
        let res = obj
        keys.forEach(k => res = res[k])
        return res
    }
    
    const res = superGet(myObj,'friendList',1,'lastName')
    console.log('keyof','superGet',res);
        
}

