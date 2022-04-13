class ArrayList<T> {
	elements: Array<T> = [];

	index: number = 0;

	add(v: T) {
		this.elements[this.index++] = v;
	}
}

let a: object = { sd: "f" };

let b: Object;
let c: {};
a = {};
b = "";
c = new Array();
let d: unknown = { sd: "d" };
// d.sd = "d";

const list = new ArrayList<object>();
list.add({ a: 12 });
list.add({ b: 14 });
// console.log(list);

class A {
	protected _is_a: boolean = true;
	constructor(public name: string, public age: number) {}
}

interface usr {
	id: `_id${string}`;
	name: string;
	age: number;
	isOld: boolean;
	favor: string[];
}
type KeyofA = keyof A;
// const k:KeyofA = 'name'

type Valueof<T extends object> = T[keyof T];

type valofA = Valueof<usr>;

class ObjectRef<T extends object, K extends keyof T> {
	private _is_ref: boolean = true;
	constructor(private readonly _obj: T, private readonly _key: K) {}

	get value(): T[K] {
		return this._obj[this._key];
	}

	set value(newValue: T[K]) {
		this._obj[this._key] = newValue;
	}
}

const a1 = new A("maomao", 15);
const ref = new ObjectRef<A, "name">(a1, "name");
console.log(ref.value);
ref.value = "df";
console.log(ref.value, a1);

export {};
