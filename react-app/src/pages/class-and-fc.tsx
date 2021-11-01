import { ChangeEvent, Component, FC, useEffect, useState } from 'react'

const ClassAndFC = () => {
	const [name, setName] = useState('dan')

	const handleNameChange = (e: ChangeEvent<HTMLSelectElement>) => {
		setName(e.target.value)
	}

	return (
		<div>
			<label htmlFor="">
				<span>先点击下面的按钮，然后3s内修改名称：</span>
				<select onChange={handleNameChange} value={name}>
					<option value="dan">dan</option>
					<option value="tom">tom</option>
					<option value="jack">jack</option>
				</select>
			</label>
			<Com name={name} />
			<Func name={name} />
		</div>
	)
}
const Func: FC<{ name: string }> = (props) => {
	const handleShowMessage = () => {
		alert(`fc followed ${props.name}`)
	}
	const handleFollow = () => {
		setTimeout(() => handleShowMessage(), 3000)
	}
	return (
		<div>
			<button onClick={handleFollow}>functional follow</button>
		</div>
	)
}

class Com extends Component<{ name: string }> {
	handleShowMessage = () => {
		alert(`class followed ${this.props.name}`)
	}
	handleFollow = () => {
		setTimeout(() => this.handleShowMessage(), 3000)
	}
	render() {
		return (
			<div>
				<button onClick={this.handleFollow}>class follow</button>
			</div>
		)
	}
}

export default ClassAndFC
