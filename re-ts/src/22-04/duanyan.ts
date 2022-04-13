class A {
	constructor(public name: string, public age: number) {}
}
class B {
	constructor(public name: string, public age: number) {}
	public d = 445;
}

const a = new B("1", 4) as A;
const b = new A("1", 4) as B;

export {};
