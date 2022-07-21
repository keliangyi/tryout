class Person {
	age = 18
	constructor(public name: string) {}
	sayHello() {
		console.log(`hello my name is ${this.name}`)
	}
}

class Student extends Person {
	constructor(name: string, public className: string) {
		super(name)
		console.log(Object.getPrototypeOf(this), this)
	}
	study() {}
}

const maomao = new Student('maomao', '一班')
console.log('Object.getOwnPropertyNames(maomao)', Object.getOwnPropertyNames(maomao))
// console.log('maomao', maomao)
// const m = {
// 	n: 1,
// 	sd() {},
// }
// for (const key in maomao) {
// 	console.log('key', key)
// }

var parent = Object.create(Object.prototype, {
	a: {
		value: 1,
		writable: true,
		enumerable: true,
		configurable: true,
	},
})
//@ts-expect-error
Object.prototype.sd = 'd'
var child = Object.create(parent, {
	b: {
		value: 2,
		writable: true,
		enumerable: true,
		configurable: true,
	},
	c: {
		value: 3,
		writable: true,
		enumerable: false,
		configurable: true,
	},
})

console.log('Object.prototype', Object.prototype)

for (const key in child) {
	console.log('key', key)
}
export {}
