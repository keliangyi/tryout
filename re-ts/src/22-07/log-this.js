var name = 'window'

let p1 = {
	name: 'p1',
	show1: function () {
		console.log('show1', this.name)
	},
	show2: () => console.log('show2', this.name),
	show3: function () {
		return function () {
			console.log('show3', this)
		}
	},
	show4: function () {
		return () => console.log('show4', this.name)
	},
}
let p2 = {
	name: 'p2',
}

p1.show1() // p1
p1.show1.call(p2) // p2

p1.show2() // "window"
p1.show2.call(p2) // "window"

p1.show3()() //window
p1.show3().call(p2) // p2
p1.show3.call(p2)() // window

p1.show4()() // p1?
p1.show4().call(p2) // p2 ❌  p1
p1.show4.call(p2)() // p2
