import React from 'react'
// 箭头函数要报错，泛型和JSX
function printProps<P = {}>(Component: React.ComponentType<P>) {
	return (props: P & { children: React.ReactChild }) => {
		console.log(props)
		return <Component {...props} a={1} />
	}
}

export default printProps
