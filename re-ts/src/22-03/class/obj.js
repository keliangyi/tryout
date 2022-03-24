// const likes = ["吃饭", "睡觉", "打豆豆"];
// class User {
// 	likes: string[];
// 	constructor(public name: string) {
// 		this.likes = likes;
// 	}
// }

// const m = new User("毛毛");
// const z = new User("张三");

// m.likes.push("15");

// console.log(m);
// console.log(z);

function User(name) {
	this.name = name;
}

User.prototype.likes = ["吃饭", "睡觉", "打豆豆"];
User.prototype.show = function () {
	console.log(this.likes);
};

// User.prototype = {
// 	likes: ["haha"],
// };

const maomao = new User("maomao");
maomao.show();

// console.log("maomao.likes：", maomao.likes);
// console.log("User.prototype.likes：", User.prototype.likes);
// console.log(maomao);
