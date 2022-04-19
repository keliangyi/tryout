type ToArray<L, Arr extends any[] = []> = Arr["length"] extends L
	? Arr
	: ToArray<L, [...Arr, any]>;

type Add<X extends number, Y extends number> = [
	...ToArray<X>,
	...ToArray<Y>
]["length"];

type Minus<X extends number, Y extends number> = ToArray<X> extends [
	...ToArray<Y>,
	...infer R
]
	? R["length"]
	: never;

interface O1 {
	name: string;
}
interface O2 extends O1 {
	age: number;
}

type Arr = [any] extends [any, any] ? 1 : 2;
type Obj = O1 extends O2 ? 1 : 2;
type Un = "a" | "b" extends "a" | "b" | "c" ? 1 : 2;

type cases = [ToArray<5>, Add<10, 5>, Minus<10, 5>];
