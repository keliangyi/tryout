/**
 * 搜索插入的位置
 * 要求：
 * - 给一个排序的数组和一个数字
 * - 若该数字在数组中则返回其索引
 * - 若不在，则返回它将会被按顺序插入的索引
 */

function inserIndex(arr: number[], target: number): number {
	for (let index = 0; index < arr.length; index++) {
		const current = arr[index]
		if (current >= target) {
			return index
		}
	}
	return arr.length
}

function inserIndexEr(arr: number[], target: number): number {
	let left = 0
	let right = arr.length

	while (left <= right) {
		let midIdx = Math.floor((left + right) / 2)

		if (arr[midIdx] === target) {
			return midIdx
		} else if (arr[midIdx] < target) {
			left = midIdx + 1
		} else {
			right = midIdx - 1
		}
	}
	return left
}
console.log('inserIndex', inserIndexEr([2, 3, 5, 6], 4))
// [3,5,6,] 8 1
