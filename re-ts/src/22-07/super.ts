class Parent {
	x: number = 123
	static p1() {
		console.log('static p1', this.p1)
	}
	p1() {
		console.log(' p1', this)
	}
}
Parent.prototype.x = 666
// console.log(new Parent())

class Child extends Parent {
	x: number
	constructor() {
		super()
		this.x = 1
		super.x = 2
		console.log('super.x', super.x) // undefined，而不是123，很好理解父类没有x
		console.log('this.x', this.x)
	}
	static p1() {
		console.log('cp1', this)
	}
	static c1() {
		console.log('static c1', this)
		super.p1()
	}
	c1() {
		console.log(' c1', this)
		super.p1() //   super.p1() ===  super.p1.call(this)
	}
}

const c = new Child()
// c.c1()
// Child.c1()
export {}
