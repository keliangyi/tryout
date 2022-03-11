import { FC } from 'react'
import OnboardingFlows from './controlled-uncontrolled/onboarding-flows'
import DataSource, { DataSourceProps } from './datasource'
import EditUser, { UserProps } from './hoc/edit-user'
import printProps from './hoc/print-props'
import WithEditableResource from './hoc/with-editable-resource'

const getData = (key: string) => () => localStorage.getItem(key)

const Text: FC<{ message?: string }> = ({ message }) => <p className="text">{message}</p>

const PrintPropsWithHOC = printProps<DataSourceProps>(DataSource)

const UserInfo = WithEditableResource<'user',UserProps>(EditUser,'/api/users/random_user','user')
// const EditableResource = withEditableResource()

const V2: FC = () => {
	return (
		<div>
            <UserInfo >
                <span>ss</span>
            </UserInfo>
			<OnboardingFlows />
			<PrintPropsWithHOC getDataFn={getData('msg')} sourceName="message">
				<Text />
			</PrintPropsWithHOC>
            
		</div>
	)
}

export default V2
