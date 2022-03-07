import { Component, useState } from 'react'

class ClassSetState extends Component {
	state = {
		counter: 0,
	}

	increase = () => {
		console.log('class Component before increase', this.state.counter)
		this.setState({ counter: this.state.counter + 1 })
		console.log('class Component after increase', this.state.counter)
	}

	triple = () => {
		console.log('class Component before triple', this.state.counter)
		this.setState({ counter: this.state.counter + 1 })
		this.setState({ counter: this.state.counter + 1 })
		this.setState({ counter: this.state.counter + 1 })
		console.log('class Component after triple', this.state.counter)
	}

	afterOneSecond = () => {
		setTimeout(() => {
			console.log(
				'class Component before afterOneSecond',
				this.state.counter
			)
			this.setState({ counter: this.state.counter + 1 })
			console.log(
				'class Component after afterOneSecond',
				this.state.counter
			)
		}, 1000)
	}

	render() {
		return (
			<div>
				<h1>class Component：{this.state.counter}s</h1>
				<button onClick={this.increase}>+1s</button>
				<button onClick={this.triple}>连续加+3s</button>
				<button onClick={this.afterOneSecond}>1s后+1s</button>
			</div>
		)
	}
}

const FcSetState = () => {
	const [counter, setCounter] = useState(0)
	const increase = () => {
		console.log('fc Component before increase', counter)
		setCounter(counter + 1)
		console.log('fc Component after increase', counter)
	}

	const triple = () => {
		console.log('fc Component before triple', counter)
		setCounter(counter + 1)
		setCounter(counter + 1)
		setCounter(counter + 1)
		console.log('fc Component after triple', counter)
	}

	const afterOneSecond = () => {
		setTimeout(() => {
			console.log('fc Component before afterOneSecond', counter)
			setCounter((c) => c + 1)
			console.log('fc Component after afterOneSecond', counter)
		}, 1000)
	}
	return (
		<div>
			<h1>fc Component：{counter}s</h1>
			<button onClick={increase}>+1s</button>
			<button onClick={triple}>连续加+3s</button>
			<button onClick={afterOneSecond}>1s后+1s</button>
		</div>
	)
}

const SetState = () => {
	return (
		<div>
			<ClassSetState />
			<FcSetState />
		</div>
	)
}

export default SetState
