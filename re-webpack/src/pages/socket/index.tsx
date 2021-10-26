import { FC, useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('/?token=01')

const Socket: FC = () => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		socket.on('connect', () => {
			console.log('连接成功')
		})

		// socket.emit('msg','你好服务器');

		socket.on('msg', (data, c) => {
			console.log(data, c)
			setCounter(c)
		})
	}, [])

	const handleSend = () => {
		const n = Math.random()
		socket.emit('msg', n)
	}

	const handleReset = () => {
		socket.emit('msg', 0)
	}

	return (
		<div>
			connect
			<p>阿里巴巴</p>
			<div>this is a counter from websocket : {counter}</div>
			<button onClick={handleSend}>
				send a random number, will receive a counter when random number
				bigger than 0.5
			</button>
			<button style={{ marginLeft: 15 }} onClick={handleReset}>
				reset
			</button>
		</div>
	)
}

export default Socket
