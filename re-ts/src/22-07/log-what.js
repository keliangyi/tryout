/**
 * 1
 */
// for (let i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log('let', i)
// 	})
// }

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function () {
// 		console.log('var', i)
// 	})
// }

/**
 * 2
 */

// if (!'a' in window) {
// 	var a = 1
// }
// if (!'b' in window) {
// 	let b = 1
// }
// console.log('a', a) // undefined
// console.log('b', b) // b is not defined

/**
 * 3
 */

// function fun() {
// 	var i = 0
// 	return function () {
// 		console.log(i++)
// 	}
// }

// var f1 = fun()
// var f2 = fun()
// f1() // 0
// f1() //1
// f2() //0

/**
 * 4
 */

// var foo = function bar() {
// 	return 123
// }

// console.log('foo', typeof foo) // function
// console.log('foo()', typeof foo()) // number
// console.log('bar()', typeof bar()) // error bar is not defined
// console.log('bar', bar) // error bar is not defined

/**
 * 5
 */
// var obj = {
// 	a: 1,
// 	foo: function () {
// 		return this.a
// 	},
// 	bar: () => {
// 		console.log(this, 'this') // {}
// 		return this.a
// 	},
// }
// var fun = obj.foo
// console.log('obj.foo', obj.foo()) // 1
// console.log('obj.bar', obj.bar.apply({ a: 15 })) // undefined
// console.log('fun', fun()) //undefined

/**
 * 6
 */
// function A(x) {
// 	this.x = x
// }
// function B(x) {
// 	this.x = x
// }
// A.prototype.x = 1
// B.prototype = new A()
// var a = new A(2)
// var b = new B(3)
// delete b.x
// console.log('a.x', a.x) // 2
// console.log('b.x', b.x) //undefined
/**
 * 7
 */

// const obj = {
// 	flag: false,
// }

// function A() {
// 	this.flag = true
// 	return obj
// }

// const a = new A()
// console.log('a.flag', a.flag) // false

/**
 * 8
 */

// const a = new Promise((r) => {
// 	console.log('7', 7)
// 	setTimeout(() => {
// 		r(6)
// 	}, 1000)
// })

// console.log('1', 1)
// setTimeout(() => {
// 	console.log('2', 2)
// }, 0)
// console.log('3', 3)
// a.then((r) => {
// 	console.log('6', r)
// })
// Promise.resolve(4).then((r) => {
// 	console.log('4', r)
// })
// console.log('5', 5)

// // 7,1,3,5,4,2,6

/**
 * 9
 */

// var a = 10
// function a() {}

// console.log('typeof', typeof a)

/**
 * 10
 */

// var obj = {
// 	a: 1,
// }
// ;(function (obj) {
// 	console.log('obj.a1', obj.a) //1
// 	obj.a = 3
// 	var obj = {
// 		a: 2,
// 	}
// 	console.log('obj.a2', obj.a) //2
// })(obj)
// console.log('obj.a3', obj.a) //3

/**
 * 11
 */

// function Fun() {}
// Fun.prototype.a = 1
// let f1 = new Fun()
// Fun.prototype = {
// 	b: 2,
// 	c: 3,
// }
// let f2 = new Fun()
// Fun.prototype.d = 4

// console.log('f1.a', f1.a) //1
// console.log('f1.b', f1.b) //undefined
// console.log('f2.c', f2.c) //3
// console.log('f2.d', f2.d) //4

/**
 * 12
 */

// var num = 1
// let obj = {
// 	num: 2,
// 	foo: function () {
// 		console.log(this.num, this)
// 	},
// 	bar: () => {
// 		console.log(this.num, this)
// 	},
// }
// let f1 = obj.foo
// let f2 = obj.bar
// obj.foo() // 2
// obj.bar() // 1
// f1() // 1
// f2() // 1

/**
 * 判断对象为空
 */
const obj = {
	// a: function () {},
	[Symbol('d')]: 'haha',
}
console.log(JSON.stringify(obj))
console.log(Object.keys(obj))

Object.defineProperty(obj, 'name', {
	value: 'ss',
	enumerable: false,
})
for (const key in obj) {
	if (Object.hasOwnProperty.call(obj, key)) {
		console.log('key', key)
	}
}
console.log('Object.getOwnPropertyNames()', Object.getOwnPropertyNames(obj))
console.log('Object.getOwnPropertySymbols()', Object.getOwnPropertySymbols(obj))

const isEmptyObj = (obj) => {
	return Object.getOwnPropertyNames(obj).length + Object.getOwnPropertySymbols(obj).length === 0
}

console.log('isEmptyObj', isEmptyObj(obj))
