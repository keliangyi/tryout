namespace infer {

    type S = [ number ][number] // T[number] ,第二个number是索引

    type ElementType<T> = T extends unknown[] ? T[number] : T
    type A = ElementType<string[]> // string
    type B = ElementType<boolean> // boolean

    type ElementType2<T> = T extends (infer U)[] ? U : T
    type SecondArg<F> = F extends (a:any, b: infer B) => void ? B : never

    type F = typeof Array['prototype']['slice']
    type C = SecondArg<F> // number | undefined

    type MyFn = {
        (x:string, y:string):string
    }
    type D = SecondArg<MyFn> // string



    type E = Exclude<1|2|4, 1|2|3> // 4 , Exclude<T,U>在 T 中而不在 U 中的类型
    type E1 = Exclude<[1,2],[1,2]> // never



    function Infer1<T extends any[]> (arg:T):T[0] {
        return arg[0]
    }

    const c = Infer1([45,4])

}