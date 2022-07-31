// class MyDate extends Date {
// 	constructor() {
// 		super()
// 	}
// 	getTest() {
// 		console.log('getTest111')
// 	}
// }

// const date = new MyDate()

// function P1(name) {
// 	this.name = name
// }
// P1.prototype.sb = '1'

// function C1(...args) {
// 	P1.apply(this, args)
// 	console.log('bind', this)
// 	this.cname = 'c1'
// }

// function inherits(subClass, superClass) {
// 	function Inner() {}

// 	Inner.prototype = superClass.prototype
// 	subClass.prototype = new Inner()
// 	console.log('empty', subClass.prototype)
// 	subClass.prototype.constructor = subClass
// }

// inherits(C1, P1)

// C1.prototype.getTest = function () {
// 	return this.cname + 'dd'
// }

// const c = new C1('dd')

// // console.log('c.getTest()', c.getTest())
// console.log(c, C1.prototype.__proto__ === P1.prototype)

function MyDate(...args) {
	const instance = new Date(...args)
	Object.setPrototypeOf(instance, MyDate.prototype)
	instance.abc = '123'
	return instance
}

Object.setPrototypeOf(MyDate.prototype, Date.prototype)
MyDate.prototype.getTest = function () {
	console.log('getTest')
	return 'dd'
}

const date = new MyDate()
date.getTime()
console.log('date.getTest()', date.getTest())
console.log('date', MyDate.prototype.__proto__ === Date.prototype)

// nth 伪类
