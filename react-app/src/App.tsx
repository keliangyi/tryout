import React, { FC } from 'react';
import logo from './logo.svg';
import { Tc as todo } from './model'
import './App.css';
import { observer } from 'mobx-react-lite';


// const todo = new Todo()


function App() {

	

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
				<h1>{ todo.count }</h1>
				<button onClick={() => todo.createTodo({ name:"mobx todo", desc:"第一个todo" })}>
					create new todo
				</button>
			</header>
		</div>
	);
}

export default observer(App);
