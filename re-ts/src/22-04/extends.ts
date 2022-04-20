class Person {
	constructor(public name: string, private id: string) {}
}

class Animal {
	constructor(public name: string, private id: string) {}
}

class Parent extends Person {
	constructor() {
		super("maomao", "001");
	}
	getParent() {}
}

class Son extends Parent {
	constructor() {
		super();
	}
}

type Ex1 = Son extends Person ? true : false; // true
type Ex2 = Person extends Son ? true : false; // false => Son 多了一个 Parent 的 getParent
type Ex3 = Animal extends Person ? true : false; // false

export {};
