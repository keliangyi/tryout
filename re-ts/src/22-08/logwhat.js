var num = 10

let obj = { num: 20 }
obj.fn = (function (num) {
	this.num = num * 3 // 60
	num++ // 21
	console.log(this)
	return function (n) {
		//10
		this.num += n // 15
		num++ //22
		console.log(num)
	}
})(obj.num) // 20

let fn = obj.fn
fn(5)

obj.fn(10)
console.log(num, obj.num)
