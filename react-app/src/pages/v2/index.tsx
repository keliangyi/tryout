import { FC } from 'react'
import DataSource from './datasource'

const getData = (key: string) => () => localStorage.getItem(key)

const Text: FC<{ message?: string }> = ({ message }) => (
	<p className="text">{message}</p>
)

const V2: FC = () => {
	return (
		<div>
			44545
			<DataSource getDataFn={getData('msg')} sourceName="message">
				<Text />
			</DataSource>
		</div>
	)
}

export default V2
