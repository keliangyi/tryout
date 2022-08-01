function findProperty(data: any, str: string) {
	return str.split('\\').reduce((a, c) => {
		return a[c]
	}, data as any)
}

console.log('findProperty()', findProperty({ a: { a5: 555, b: { c: 'sb', d: 'ss' }, f: 1 } }, `a\\b`))
class Sd {}
const a = {}

console.log('Object.prototype.toString.call(a)', Object.prototype.toString.call(a), a.toString())
console.log('a.constructor.name', a.constructor.name)
export {}
