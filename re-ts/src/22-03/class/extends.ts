class Parent {
	constructor(public name: string) {}
	sayMyName() {
		return this.name;
	}
	parent = true;
	override() {
		console.log(
			this,
			`
                this is from parent. 
                if you override this method in Son and also want call this, you can use super.override.
                if you use p.override() 'this' will be parent, but use super.override() 'this' will be son
            `
		);
	}
}

class Son extends Parent {
	exec: Function;
	constructor(name: string, public age: number, exec: Function) {
		super(name);
		this.exec = exec;
	}

	pro = 15;
	sayMyAge() {
		return this.age;
	}

	override() {
		super.override(); // === Parent.prototype.override.call(this)
		console.log("在子类中重写方法");
		return 45;
	}
}

const a = new Son("maomao", 15, () => 123);
// a.override();
console.log(a);
export {};
