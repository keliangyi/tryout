import { FC } from 'react'
import { useParams } from 'react-router-dom'

const MyRouter: FC = () => {
	const p = useParams()
	console.log(p)

	return <div>MyRouter</div>
}

export default MyRouter
