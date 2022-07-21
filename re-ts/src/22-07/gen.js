function* fn(x) {
	console.log('1', x)
	const y = 2 * (yield x + 1) // 2 + 1
	console.log('2', x, y) //  foo.next(12) => y = 2 * 12
	const z = yield y / 3 // 2 * 12 / 3
	console.log('3', x, z) //foo.next(13) => 13 表达式在yield 后面所以不用执行
	return x + y + z // 2 + 24 + 13
}

const foo = fn(2)
// console.log('foo.next()', foo.next())
// console.log('foo.next(12)', foo.next(12))
// console.log('foo.next(13)', foo.next(13))

function* gen(x) {
	// 假设传入的x = 1
	// 函数里所有地方的x都是一致的
	console.log('start') // 当执行第一次next时才会执行，第一次next传入的参数是没有用的
	const a = yield x + 1 // 1 + 1
	console.log('a', a) // 取决于调用本次next函数时传入的参数，假设next(2)
	const b = yield a + 1 // 2 + 1
	console.log('b', b) // 取决于调用本次next函数时传入的参数
	const c = yield b + 1
	console.log('c', c) //取决于调用本次next函数时传入的参数
	const d = yield c + 1
	console.log('d', d) // 取决于调用本次next函数时传入的参数
	return d
}

// const g1 = gen(1)
// console.log('g1.next()', g1.next(1))
// console.log('g1.next()', g1.next(2))
// console.log('g1.next()', g1.next(3))
// console.log('g1.next()', g1.next(3))
// console.log('g1.next()', g1.next(3))

const { readFile } = require('fs/promises')
const { resolve } = require('path')
function* readF() {
	const p = yield readFile(resolve(__dirname, 'log-what.js'))
	return yield readFile(p, 'utf-8')
	// yield '!'
}

function* read() {
	yield 'hello'
	yield 'world'
	yield '!'
	return '45'
}

function co(gen) {
	return new Promise((resolve, reject) => {
		function inner(data) {
			const { value, done } = gen.next(data)
			if (done) {
				resolve(value)
			} else {
				Promise.resolve(value).then((v) => {
					inner(v)
				})
			}
		}
		inner()
	})
}

co(read()).then((r) => {
	console.log('co(read())', r)
})
