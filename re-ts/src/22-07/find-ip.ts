/**
 * 从一个纯整数的字符串中找出所有符合IP地址条件的IP地址
 *
 * IP地址的条件：
 * - 必须是四段
 * - 每一段的数字是在0到255之间，包含0和255
 * - 可以为0，但不能是01这种
 */

/**
 * 验证每一段是否符合IP地址
 * @param slice
 * @returns
 */
function validIPSlice(slice: string): boolean {
	const numberSlice = +slice
	const conditionOne = 0 <= numberSlice && numberSlice <= 255
	const conditionTwo = slice.length > 1 ? !slice.startsWith('0') : !!slice.length
	return conditionOne && conditionTwo
}

/**
 * 从字符串找出合法的ip段
 * @param str
 */
function findIp(str: string) {
	const res: string[] = []
	if (str.length < 4 || str.length > 12) {
		return res
	}
	const range = [0, 1, 2, 3]

	for (let a of range) {
		for (let b of range) {
			for (let c of range) {
				const d = str.length - a - b - c
				if (d >= 1 && d <= 3) {
					const resArr = [str.substring(0, a), str.substring(a, a + b), str.substring(a + b, a + b + c), str.substring(a + b + c)]
					if (resArr.every((slice) => validIPSlice(slice))) {
						res.push(resArr.join('.'))
					}
				}
			}
		}
	}
	return res
}

function findIp1(str: string) {
	const res: string[] = []
	if (str.length < 4 || str.length > 12) {
		return res
	}
	function inner(_str: string, count: number, out: string) {
		if (count === 5) {
			if (!_str.length) {
				res.push(out)
			}
		} else {
			for (let i = 1; i <= 3; i++) {
				if (_str.length < i) break
				const v = _str.substring(0, i)
				if (!validIPSlice(v)) break
				const newOut = out + v + (count === 4 ? '' : '.')
				inner(_str.substring(i), count + 1, newOut)
			}
		}
	}
	inner(str, 1, '')
	return res
}
console.log("findIp('25525511135')", findIp1('25525511135'))
console.log("findIp('11101')", findIp1('1931681250'))
