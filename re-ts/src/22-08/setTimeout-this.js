setTimeout(function () {
	console.log(this)
})

function f1() {
	setTimeout(() => {
		console.log(this) // window
	})
}
function f2() {
	setTimeout(function () {
		console.log(this)
	})
}

const f3 = () => {
	setTimeout(function () {
		console.log(this)
	})
}
const f4 = () => {
	setTimeout(() => {
		console.log(this)
	})
}

function f5() {
	return () => {
		setTimeout(function () {
			console.log(this)
		})
	}
}
const f51 = f5()
function f6() {
	return function () {
		setTimeout(function () {
			console.log(this)
		})
	}
}
const f61 = f6()

/***
 * 将一个字符串变成变量名
 */

const pname = 'externals'

const externals = 'hello 123!'
const a = 2
const c = 3

const o = { externals, a, c }

console.log('o[pname]', o[pname])
