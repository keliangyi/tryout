const arr = [1, 2, 3] as const;

// arr[1]=3 不允许

function showArr1(a: any[]) {}
//@ts-expect-error
showArr1(arr); // ❌
function showArr2(a: readonly any[]) {}
showArr2(arr); // ✅

// ===========================

// 可变元祖 rest 数据类型，固定元祖的一部分内容
const [name, age, ...rest]: [
	name: string,
	age: number,
	...rest: unknown[],
	end: string
] = ["maomao", 15, 1, 45, "dd"];

// 元祖标签
const [id, avatar]: [
	id: `id_${string}`,
	avatar: string,
	price: number,
	...rest: any[]
] = ["id_15", "http://", 15, {}, [1, 23]];

const ar: [number, number, string] = [2, 2, "sd"];

const a: [...any[]] = ar;

export {};
