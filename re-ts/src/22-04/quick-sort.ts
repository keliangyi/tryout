const quickSort = <T>(arr: Array<T>): Array<T> => {
	if (arr.length < 2) {
		return arr;
	}
	const mid = arr.splice(Math.floor(arr.length / 2), 1)[0];
	console.log("mid:", mid);
	const left: Array<T> = [];
	const right: Array<T> = [];
	arr.forEach((i) => {
		if (i < mid) {
			left.push(i);
		} else {
			right.push(i);
		}
	});

	return quickSort(left).concat(mid, quickSort(right));
};

const nums = [60, 2, 4, 5, 6.2, 14, 2.5, 3, 7, 10, 9, 8, 13, 20, 11, 16, 12];
const strs = ["cba", "abc", "nba", "wnba", "rgb", "bgm"];
const res = quickSort(strs);
console.log(res);
