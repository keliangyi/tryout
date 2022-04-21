const twoSum1 = (nums: number[], target: number): boolean => {
	return nums.some((s) => nums.includes(target - s));
};
const twoSum2 = (nums: number[], target: number): boolean => {
	const dict: Record<number, boolean> = Object.fromEntries(
		nums.map((i) => [i, true])
	);
	return nums.some((s) => dict[target - s]);
};
const twoSum3 = (nums: number[], target: number): boolean => {
	const dict: Record<number, boolean> = {};
	for (let i of nums) {
		if (dict[i]) {
			return true;
		}
		dict[target - i] = true;
	}
	return false;
};
const twoSumIndex = (nums: number[], target: number): Array<number> => {
	const dict: Record<number, number> = {};
	for (let i = 0; i < nums.length; i++) {
		const num = nums[i];
		const key = target - num;
		if (num in dict) {
			return [dict[num], i];
		}
		dict[key] = i;
	}
	return [-1, -1];
};

console.log(twoSumIndex([2, 4, 7, 8], 9));

export {};
