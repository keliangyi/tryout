namespace Record {


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












}