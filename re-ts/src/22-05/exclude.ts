type A = 'a' | 'd'
type B = 'a' | 'c'

type O1 = {
	name: string
}
type O2 = {
	name: string
	age: number
	favors: string[]
}

type T = O1 extends O2 ? true : false
type Et = Extract<A, B>
type Ec = Exclude<A, B>
//1.   type Ec = Exclude<A, B>
//1.   type Ec = A extends B ? never : A
//1.   type Ec = ('a' | 'd') extends ('a' | 'c' ) ? never : ('a' | 'd')
//1.   type Ec = ('a' extends 'a' | 'c' ? never : 'a') | ('d' extends 'a' | 'c' ? never : 'd')
//1.   type Ec =   never |  'd'
//1.   type Ec =     'd'

type Person = {
	name: string
	age: number
	favor: string[]
	money: number
	food: string
}
type Pet = {
	name: string
	age: number
	food: string
	onwer: string
}
//两者都存在的属性名称
type BothHas = Extract<keyof Person, keyof Pet>
// 获取只存在于Person中的属性名称
type Only_Person_has_But_Pet_Does_Not = Exclude<keyof Person, keyof Pet>

export {}
