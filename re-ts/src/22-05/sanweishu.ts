/**
 * 获取由0~9组成的所有不重复的三位数
 * 不重复：120，154 ...✅ 重复：110 ...❌
 * 百位 1~9，不能是0
 * 十位 0~9, 不能和百位相同
 * 个位 0~9， 不能和百位与十位相同
 * @returns 数量
 */
function getCount() {
	let arr: number[] = []
	for (let hundred = 1; hundred < 10; hundred++) {
		for (let ten = 0; ten < 10; ten++) {
			if (ten === hundred) continue
			for (let num = 0; num < 10; num++) {
				if (num !== ten && num !== hundred) {
					arr.push(hundred * 100 + ten * 10 + num)
				}
			}
		}
	}
	console.log(arr)
	return arr.length
}

getCount()
