namespace FN {
	// 元组类型，固定长度和每一个位置的类型

	// 第一种方式
	const arr = [false, 1, '2', [3]] // (string | number | boolean | number[])[]
	const arrAsConst = [false, 1, '2', [3]] as const //readonly [false, 1, "2", readonly [3]]

	/**
	 * 第二种方式，其实和第一种不是一样的
	 * @param arg ‘
	 * @returns
	 */
	function tuple<T extends unknown[]>(...arg: T): T {
		return arg
	}

	const d = tuple(1, 'dd', false) // [ number, string, boolean ]
	d[0].toFixed()
	d[1].substring(0)
	d[2].valueOf()
}
