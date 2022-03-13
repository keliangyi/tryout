import axios from 'axios'
import React, { useEffect, useState } from 'react'

const capitalize = (str: string) => str.charAt(0).toLocaleUpperCase() + str.slice(1)
type S = Capitalize<'acfun'>
type Bu = Uncapitalize<'BASE_URL'>

type FuncNames<T extends string> = `onChange${Capitalize<T>}` | `onSave${Capitalize<T>}` | `onSelect${Capitalize<T>}`
type PropsFuns<T extends string> = {
	[K in FuncNames<T>]: () => void
}
const events: PropsFuns<'user'> = {
	onChangeUser: () => {},
	onSaveUser: () => {},
	onSelectUser: () => {},
}

const BASE_URL = 'https://random-data-api.com'
function WithEditableResource<T extends string, P extends { [k in T]?: P[T] }>(
	Component: React.ComponentType<P>,
	resourcePath: string,
	resourceName: string
): React.ComponentType<P> {
	return function Hoc(props: P) {
		// Hoc名称是必要的 react-hooks/exhaustive-deps
		// const [ original,setOriginal ] = useState< P[T] | null>(null)
		const [data, setData] = useState<P[T] | null>(null)

		useEffect(() => {
			;(async () => {
				const res = await axios(BASE_URL + resourcePath)
				setData(res.data)
				// setOriginal(res.data)
			})()
		}, [])

		const onChange = (changes: any) => {
			setData({ ...data, ...changes })
		}

		props = Object.assign({}, props, { [resourceName]: data, [`onChange${capitalize(resourceName)}`]: onChange })

		return <Component {...props} />
	}
}

export default WithEditableResource
