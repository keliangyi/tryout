type getFnParams<T> = T extends (...params: infer P) => any ? P : T;

interface Fn {
	(name: string, age: number): void;
}

type Res = getFnParams<Fn>;
const res: Res = ["maomao", 15];

export {};
