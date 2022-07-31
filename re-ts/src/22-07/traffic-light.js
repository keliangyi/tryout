const lightConfig = new Map([
	[0, { time: 3, name: '红灯', next: '绿灯' }],
	[1, { time: 5, name: '绿灯', next: '黄灯' }],
	[2, { time: 2, name: '黄灯', next: '红灯' }],
])

const lightFn = ({ name, time, next }) => {
	return new Promise((r) => {
		console.log(`现在是${name},${time}s后将会变成${next}`)
		setTimeout(() => {
			r()
		}, time * 1000)
	})
}

const trafficLight1 = async () => {
	let i = 0
	while (true) {
		const currentLight = lightConfig.get(i % 3)
		await lightFn(currentLight)
		i++
	}
}
// trafficLight1()

const trafficLight2 = async () => {
	await lightFn(lightConfig.get(0))
	await lightFn(lightConfig.get(1))
	await lightFn(lightConfig.get(2))
	trafficLight2()
}
trafficLight2()
