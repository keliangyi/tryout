import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Tc as todo } from './model'

import { observer } from 'mobx-react-lite'
import SetState from './pages/set-state'
import ClassAndFC from './pages/class-and-fc'
import './App.css'
// const todo = new Todo()

const Home = observer(() => {
	return (
		<div className="App">
			<button
				onClick={() =>
					todo.createTodo({
						name: 'mobx todo',
						desc: '第一个todo',
					})
				}
			>
				create new todo {todo.count}
			</button>
		</div>
	)
})

function App() {
	return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="/class-func">类组件和函数组件</Link>
					</li>
					<li>
						<Link to="setstate">setState</Link>
					</li>
				</ul>
			</nav>
			<hr />
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/setstate" component={SetState} />
				<Route path="/class-func">
					<ClassAndFC />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default App
