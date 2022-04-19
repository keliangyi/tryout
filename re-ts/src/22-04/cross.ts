type N = { name: string };

const d = { name: "d", age: 15 } as N;

type A = "a" | "b";
type B = "c" | "d" | "b";
type C = A & B;

type Btn = {
	type: "button" | "submit" | "reset";
	text: string;
	alt: string;
	extra?: string;
};

type Link = {
	href: string;
	target: 0 | 1 | 2;
	alt: string;
};

type Sty = {
	size: "sm" | "md" | "lg";
	color: string;
};
type D = Btn & Sty;
type U = Btn | Link;

const u_1: string | number = "";
const c_1: ("a" | "c") & ("b" | "a") = "a";

const c1: Btn & Link = {
	type: "button",
	text: "d",
	alt: "d",
	href: "d",
	target: 0,
	extra: "dd",
};

const u1: Btn | Link = {
	type: "button",
	alt: "d",
	href: "d",
	target: 0,
	extra: "dd",
};
const d1: D = {
	text: "",
	type: "button",
	size: "lg",
	color: "red",
	alt: "dd",
};
const b1: Btn = {
	type: "submit",
	text: "提交",
	alt: "提交按钮",
};
const a1: Link = {
	href: "qq.com",
	target: 0,
	alt: "跳转到qq",
};

const s1: Sty = {
	size: "md",
	color: "red",
};

function cross<T extends object[]>(...objs: T): T[number] {
	const o = {} as T[number];
	objs.forEach((obj, idx) => {
		Object.keys(obj).forEach((key) => {
			if (!o.hasOwnProperty(key)) {
				//@ts-expect-error
				o[key as keyof T[number]] = obj[key];
			}
		});
	});
	return o;
}

const combine = cross(a1, b1, s1);
console.log(combine);

type A1 = "a" | "b";
type A2 = "a";

type A3<T, U> = T extends U ? "c" : "d";

type A4 = A3<A1, A2>;
const a4: A4 = "c";

export {};
