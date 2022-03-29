function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.address = ["中国", "北京"];
function Student(school, name, age) {
	Person.call(this, name, age);
	this.school = school;
}

const _extends = (parent, child) => {
	function Middle() {
		this.middle = true;
		this.constructor = child;
	}
	Middle.prototype = parent.prototype;
	return new Middle();
};

Student.prototype = _extends(Person, Student);

const s1 = new Student("清华", "张三", 15);

// const yaba = {
// 	name: "张三",
// 	age: 12,
// };
// const user = {
// 	name: "maomao",
// 	age: 22,
// 	sayAndBindAddress(address) {
// 		this.address = address;
// 		console.log(`你好，我叫${this.name}`);
// 	},
// };
// console.log("before:", yaba);
// user.sayAndBindAddress.call(yaba, "北京");
// console.log("after:", yaba);
