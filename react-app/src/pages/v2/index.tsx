import { FC } from 'react'
import OnboardingFlows from './controlled-uncontrolled/onboarding-flows'
import DataSource, { DataSourceProps } from './datasource'
import printProps from './hoc/print-props'

const getData = (key: string) => () => localStorage.getItem(key)

const Text: FC<{ message?: string }> = ({ message }) => <p className="text">{message}</p>

const DataSourceWithHOC = printProps<DataSourceProps>(DataSource)

const V2: FC = () => {
	return (
		<div>
			<OnboardingFlows />
			<DataSourceWithHOC getDataFn={getData('msg')} sourceName="message">
				<Text />
			</DataSourceWithHOC>
		</div>
	)
}

export default V2
