import { AnyAaaaRecord } from 'dns'
import React from 'react'
import { FC, useEffect, useState } from 'react'

interface DataSourceProps {
	sourceName: string
	getDataFn: () => any
}

const DataSource: FC<DataSourceProps> = ({
	children,
	getDataFn,
	sourceName,
}) => {
	const [state, setState] = useState(null)

	useEffect(() => {
		;(async function () {
			const res = await getDataFn()
			setState(res)
		})()
	}, [getDataFn])

	children = React.Children.map(children, function (child) {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {
				[sourceName]: state,
			})
		}
		return child
	})

	return <>{children}</>
}
export default DataSource
