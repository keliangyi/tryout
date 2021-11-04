import { FC, memo, useContext, useEffect, useState } from 'react'
import { Prompt, useLocation } from 'react-router-dom'
import { GlobalContext } from '../ctx'
import { usePrompt } from '../hooks'

const TestCtx: FC = memo(() => {
	console.log('parent rendered')
	const [count, setCount] = useState(0)
	const { pathname } = useLocation()

	usePrompt(true)

	useEffect(() => {
		setTimeout(() => {
			setCount(45)
		}, 6000)

		// const d = (event: any) => {
		// 	const e = event || window.event
		// 	// Cancel the event
		// 	e.preventDefault()

		// 	console.log(12557)

		// 	if (e) {
		// 		e.returnValue = 'are you sure ?' // Legacy method for cross browser support
		// 	}
		// 	return 'are you sure ?1'
		// }

		// window.addEventListener('beforeunload', d)
		// return () => {
		// 	window.removeEventListener('beforeunload', d)
		// }
	}, [])

	return (
		<>
			{/* <Prompt
				when={pathname == '/test-ctx'}
				message={() => 'are you sure ?'}
			/> */}
			<ChildOne></ChildOne>
			<ChildTwo count={count}>
				<ChildrenMemo />
			</ChildTwo>
		</>
	)
})

const ChildOne: FC = memo(() => {
	const { store } = useContext(GlobalContext)
	console.log('ChildOne redered')

	return (
		<div>
			<p>{store?.name}</p>
			<GrandSunOne />
		</div>
	)
})

const GrandSunOne: FC = memo(() => {
	console.log('GrandSunOne redered')
	return <div>GrandSunOne</div>
})
const GrandSunTwo: FC = memo(() => {
	console.log('GrandSunTwo redered')
	return <div>GrandSunTwo</div>
})

const ChildrenMemo = () => {
	console.log('ChildrenMemo redered')

	return <div>ChildrenMemo</div>
}

const ChildTwo: FC<{ count: number }> = memo(({ count, children }) => {
	const [color, setColor] = useState('red')
	console.log('ChildTwo redered')
	return (
		<div style={{ color }}>
			<div>ChildTwo{count}</div>
			<button
				onClick={() => setColor((c) => (c === 'red' ? 'blue' : 'red'))}
			>
				change color
			</button>
			<GrandSunTwo />
			{children}
		</div>
	)
})

export default TestCtx
