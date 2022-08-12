class Animal {
	s: string
	sd: () => void
	constructor(public type: string) {
		this.s = 'f'
		this.sd = () => {}
	}
	walk() {}
}

class Cat extends Animal {
	constructor(public name: string, type: string) {
		super(type)
	}
}

const tom = new Cat('Tom', 'cat')
Object.defineProperty(tom, 'def', {
	value: 'sb',
	enumerable: true,
})
// Object.defineProperty(tom, Symbol('a'), {
// 	value: 'a',
// 	enumerable: true,
// })
console.log('tom', tom)
for (const key in tom) {
	// if (Object.prototype.hasOwnProperty.call(tom, key)) {
	// 	console.log('key1', key)
	// }
	console.log('key1', key)
}
console.log('Object.entries(tom)', Object.entries(tom))
export {}

interface Arr {
	[K: number]: string
	length: number
}

const arr: Arr = ['a']
