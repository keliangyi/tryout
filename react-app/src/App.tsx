import React, { useEffect } from 'react'
import logo from './logo.svg'
import { Tc as todo } from './model'
import './App.scss'
import { observer } from 'mobx-react-lite'

// const todo = new Todo()

function App() {
	useEffect(() => {
		// const fetchData = async () => {
		// 	const res = await fetch('http://192.168.0.7:5959/user/12?type=1',{
		// 		mode:"cors",
		// 		headers:{
		// 			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
		// 		}
		// 	})
		// 	console.log(res);
		// }
		// fetchData()
	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				<h1>{todo.count}</h1>
				<button
					onClick={() =>
						todo.createTodo({
							name: 'mobx todo',
							desc: '第一个todo',
						})
					}
				>
					create new todo
				</button>
			</header>
		</div>
	)
}

export default observer(App)
