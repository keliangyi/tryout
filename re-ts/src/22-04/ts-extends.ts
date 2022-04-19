// 不能正常使用
class Person {
	constructor(public name: string) {}
}

class Account {
	public id = Date.now().toString(16);
}

class User extends Mixin(Person, Account) {
	access = "admin";
	constructor(name: string) {
		super();
	}
}

const mm = new User("maomao");

console.log(mm);

type Constructor = new (...args: any[]) => {};
function Mixin<T extends Constructor[]>(...mixins: T) {
	class Mix {}
	function copyProperties(target: object, source: object) {
		for (let key of Reflect.ownKeys(source)) {
			// 这些属性会影响继承的基类，避开不继承
			if (key !== "constructor" && key !== "prototype" && key !== "name") {
				let desc = Object.getOwnPropertyDescriptor(source, key)!;
				Object.defineProperty(target, key, desc);
			}
		}
	}
	for (let mixin of mixins) {
		copyProperties(Mix, mixin); // 拷贝静态属性
		console.log(mixin, mixin.prototype);
		copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
	}
	return Mix;
}

export {};
