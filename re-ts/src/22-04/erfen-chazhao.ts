/**
 * 二分查找
 * 给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target ，
 * 写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1
 *
 * 使用二分查找的要求：
 * -用于查找的内容逻辑上来说是需要有序的
 * -查找的数量只能是一个，而不是多个
 * 思路：
 * -首先选择数组中间的数字和需要查找的目标值比较
 * -如果相等最好，就可以直接返回答案了
 * -如果不相等：
 * --如果中间的数字大于目标值，则中间数字向右的所有数字都大于目标值，全部排除
 * --如果中间的数字小于目标值，则中间数字向左的所有数字都小于目标值，全部排除
 *
 * @param arr
 * @param target
 * @returns
 */

const search = <T extends number>(arr: Array<T>, target: T): number => {
	if (!arr.length) return -1; // 考虑边界值
	if (arr.length == 1) return 0; //只有一位无需进入循环
	let start = 0;
	let end = arr.length - 1;
	while (start <= end) {
		let mid = Math.floor((start + end) / 2); //取中位数，可能除不尽向下取整
		if (arr[mid] === target) {
			return mid;
		} else if (target > arr[mid]) {
			// 若目标值大于中位值
			start = mid + 1; //则说明目标值在更右侧，将初始下标右移至中位数右侧，再次循环
		} else {
			// 若目标值小于中位值
			end = mid - 1; //则说明目标值在更左侧，将结束下标左移至中位数左侧，再次循环
		}
		console.log("mid:", mid, arr[mid], start, end);
	}
	return -1;
};
console.log(search([-1, 0, 3, 5, 9, 12, 15], 9));
