type getFnParams<T> = T extends (...params: infer P) => any ? P : T;

interface Fn {
	(name: string, age: number): void;
}

type Res = getFnParams<Fn>;
const res: Res = ["maomao", 15];

type RertunType<T extends Function> = T extends (...args: any[]) => infer R
	? R
	: never;
type Parameters<T extends Function> = T extends (...args: infer P) => any
	? ArrayToUnion<P>
	: never;

type ArrayToUnion<T extends any[]> = T[number];

type Tail<T extends any[]> = T extends [infer F, ...infer R] ? R : never;

type R1 = Parameters<(a: number, b: string, c: false) => void>;
type T1 = Tail<[1]>;

type TypeOfArray<T> = T extends Array<infer U> ? U : never;

type T2 = TypeOfArray<string[]>;

export {};
