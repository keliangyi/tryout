import { Component, FC, useEffect, useState } from 'react'

const ClassAndFC = () => {
	const [name, setName] = useState('dan')
	useEffect(() => {
		setTimeout(() => {
			setName('jack')
		}, 2000)
	}, [])
	return (
		<div>
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
