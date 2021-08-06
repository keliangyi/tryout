import React, { FC, useEffect } from 'react'
import { nums, bigThanFive } from './testjs.js'

const App: FC = () => {
	const zb = { x: 12, y: 45 }
	const msg = '__ this is React app !!!'
	console.log(msg)
	useEffect(() => {
		const getData = async () => {
			return new Promise((rs) => {
				rs(4)
			})
		}
		const c = getData()
		console.info(c, 'c1cc', Reflect.get(zb, 'y'))
		console.info([1, 4, 7, 6].find((f) => f > 5))
		setTimeout(() => {
			console.log('另一个log', '还是多个参1数的', 1, 2)
		}, 3000)
		const cd = bigThanFive(nums)
		console.info('====', cd)
	}, [])
	return (
		<div>
			<h1 style={{ color: 'green' }}>{msg}</h1>
			{msg.startsWith('_') ? '_' : 'no11ne'}
			<ul>
				{[1, 2, 4, 5, 6].map((i) => (
					<li key={i}>item_{i}</li>
				))}
			</ul>
		</div>
	)
}
//@ts-ignore
App.title = '测试标题'

export default App
