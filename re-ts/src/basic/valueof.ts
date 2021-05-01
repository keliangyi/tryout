namespace va {


    type Valueof<T extends object> = T[keyof T]

    interface Iobj {
        name:string
        age:number,
        likes:string[]
    }

    type Val = Valueof<Iobj>

    const c:Val = ['吃饭','睡觉']

    const colors = {
        'admin':'blue',
        'superAdmin':'green',
        'user':'yellow',
    } as const

    const oneOfColor:Valueof<typeof colors> = 'blue'









}