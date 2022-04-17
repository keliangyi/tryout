const quickSort = <T>(arr: Array<T>): Array<T> => {
	const loop = (arr: Array<T>): Array<T> => {
		if (arr.length < 2) {
			return arr;
		}
		const mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
		// console.log("mid:", mid);
		const left: Array<T> = [];
		const right: Array<T> = [];
		arr.forEach((i) => {
			if (i < mid) {
				left.push(i);
			} else {
				right.push(i);
			}
		});

		return loop(left).concat(mid, loop(right));
	};
	return loop(arr.slice());
};

// 中文排序
const chineseSort = (str: string[]): string[] =>
	str.sort((a, b) => a.localeCompare(b));

// 字符串自排序
const strSelfSort = (str: string) => {
	return quickSort(str.split("")).join("");
};

const isChinese = (str: string): boolean => {
	const reg = /[\u4e00-\u9fa5]+/g;
	return reg.test(str);
};

function sort(str: string): string;
function sort<T extends Array<unknown>>(data: T): T;
function sort(data: any) {
	if (typeof data === "string") {
		return strSelfSort(data);
	}
	if (Array.isArray(data)) {
		if (data.some((s) => isChinese(s))) {
			return chineseSort(data);
		}
		let res = quickSort(data);
		if (data.some((s) => typeof s === "string")) {
			res = res.map((i) => strSelfSort(i));
		}
		return res;
	}
}

const str = "qwertyuiop";
const nums = [60, 2, 4, 5, 6.2, 14, 2.5, 3, 7, 10, 9, 8, 13, 20, 11, 16, 12];
const strs = ["cba", "abc", "nba", "wnba", "rgb", "bgm"];
const chineseChar = ["赵", "钱", "曹", "孙", "李", "艾", "贝", "柯"];

console.log(sort(str));
console.log(sort(nums));
console.log(sort(strs));
console.log(sort(chineseChar));
