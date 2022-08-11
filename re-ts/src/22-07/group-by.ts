function groupBy(arr: any[], flag: Function | string) {
	return arr.reduce((a, c) => {
		const r = typeof flag === 'function' ? flag(c) : c[flag]
		if (a[r]) {
			a[r].push(c)
		} else {
			a[r] = [c]
		}
		return a
	}, {} as Record<string, any[]>)
}

console.log('groupBy()', groupBy(['one', 'two', 'tree'], 'length'))
console.log('groupBy()', groupBy([6.5, 6.1, 5.6, 7.1], Math.round))

// class A {
// 	protected name = 45
// }

// const a = new A()
// console.log(a.name)

export {}
