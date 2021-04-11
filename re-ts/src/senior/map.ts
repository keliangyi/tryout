namespace CMap {
    // 映射类型
    //Record<keys,values>
    //Partial<Obj>
    //Required<Obj>
    //Readonly<Obj>
    //Pick<Obj, keys>

    
    type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri'
    type Day = Weekday | 'Sat' | 'Sun'
    type Next = Record<Weekday, Day>
    
    type MyRecord<T extends string | number | symbol ,U> = { [P in T]:U }  
    type Next1 = MyRecord<Weekday, Day>

    const day:Day = 'Mon'

    const nextDay:Next1 = {
        'Mon':'Tue',
        'Thu':'Wed',
        'Wed':'Thu',
        'Tue':'Fri',
        'Fri':'Sat'
    }

    const nextDay1: { [K in Weekday]:Day } = {  
        'Mon':'Tue',
        'Thu':'Wed',
        'Wed':'Thu',
        'Tue':'Fri',
        'Fri':'Sat'
    }

    type User = {
        id:number,
        age:number
        name:string
    }

    type IUser<T> = Record<keyof T, number>
    
    const u:IUser<User> = {
        name:1,
        age:1,
        id:4 
    }







    interface Account {
        id:number
        isEmploree:boolean
        notes:string[]
    }

    type Partial<T extends object> = { [K in keyof T] ?: T[K] } // 
    type Nullable<T extends object> = { readonly [K in keyof T] ?: T[K] | null }

    const User1:Nullable<Account>= {
        id:null
    }


    type Pick<O extends object,K extends keyof O> = { [ P in K ]: O[P] }


    const o = {
        name:"maomao",
        age:12,
        likes:['吃饭']
    }

    const pk:Pick<typeof o, 'age'> = {
        age:45
    }

    
}

export interface Banshen {
    color:"Red" | 'Blue' | 'Purple'
    current: Banshen['color']
}

export let Banshen:{
    DEFAULT:Banshen['color']
    getColor:(current:Banshen['color'], color:Banshen['color']) => Banshen
} = {
    DEFAULT:'Red',
    getColor(current:Banshen['color'], color = Banshen.DEFAULT ):Banshen{
        return {
            current,
            color
        }
    }
}