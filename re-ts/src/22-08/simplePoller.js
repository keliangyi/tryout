const sleep = (second) => {
	return new Promise((r) => {
		setTimeout(() => {
			r()
		}, second * 1000)
	})
}

const TIMES = 1.5
/**
 * 核心：满足条件就执行，不满足就递归调用
 * @param {*} queryFn
 * @param {*} callback
 */
function simplePoller(queryFn, callback) {
	let interval = 1
	const recursionFn = async () => {
		await sleep(interval)
		// 支持异步
		const flag = await queryFn()
		if (flag) {
			interval = 1
			callback()
		} else {
			await sleep(interval)
			interval = interval * TIMES
			recursionFn()
		}
	}
	recursionFn()
}

/**
 * 以下是测试的
 */
const queryFnTest = (times) => {
	let i = 0
	return {
		queryFn() {
			i++
			return i >= times
		},
		callback() {
			console.log(`${times}，执行完了`)
		},
	}
}

const concurrent1 = queryFnTest(3)
const concurrent2 = queryFnTest(5)
const concurrent3 = queryFnTest(4)

simplePoller(concurrent1.queryFn, concurrent1.callback)
simplePoller(concurrent2.queryFn, concurrent2.callback)
// 测试异步
let ii = 0
simplePoller(async () => {
	await sleep(3)
	ii++
	return ii >= 4
}, concurrent3.callback)
