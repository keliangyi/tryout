class Person {
	constructor(public name: string, private id: string) {}
}

class Animal {
	constructor(public name: string, private id: string) {}
}

class Parent extends Person {
	constructor() {
		super('maomao', '001')
	}
	getParent() {}
}

class Son extends Parent {
	constructor() {
		super()
	}
}

type Ex1 = Son extends Person ? true : false // true
type Ex2 = Person extends Son ? true : false // false => Son 多了一个 Parent 的 getParent
type Ex3 = Animal extends Person ? true : false // false

// 联合类型
type U1 = string | number
type U2 = string | number | symbol

type N1 = 0 | 1 extends 1 | 0 ? true : false

type Un = 'a' | 'b' | 'c' extends 'a' | 'b' ? 1 : 2
type Extends<T, U> = T extends U ? 1 : 0

type E1 = Extends<U1, U2> // 1,很好理解
type E2 = Extends<U2, U1> // 0 | 1，因式分解
/**
 * type E2 = Extends<U2, U1>
 *
 * 1. type E2 = Extends<string | number, string | number | symbol>
 * 2. type E2 = (string | number) extends (string | number | symbol) ? 1 : 0
 * 3. type E2 = (string extends string ? 1 : 0) | (string extends number ? 1 : 0 ) |
 *              (string extends symbol ? 1 : 0) | (number extends string ? 1 : 0) |
 *              (number extends number ? 1 : 0 ) | (number extends symbol ? 1 : 0)
 * 4. type E2 = 1 | 0 | 0 | 0 | 1 | 0
 * 5. type E2 = 0 | 1
 */

//分配律

type E3<T> = string extends T ? 1 : 0
type E3_1 = E3<string | number>

type E4<T, U> = U extends T ? 1 : 0

type E4_1 = E4<string | number, string>
type E4_1_1 = E4<string, number> | E4<string, string>
type E4_1_2 = (string extends number ? 1 : 0) | (string extends string ? 1 : 0)
type E4_1_3 = 0 | 1

//==========函数============
type F1 = (a: string, b: number) => void
type F2 = (a: string) => void

type FE1 = F2 extends F1 ? F2 : never
export {}
