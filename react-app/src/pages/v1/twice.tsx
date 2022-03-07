import React, { useEffect } from 'react'

const Twice: React.FC = () => {
	// const fetchData = () => {
	// 	return axios({
	// 		url: 'https://random-data-api.com/api/coffee/random_coffee',
	// 	})
	// }

	// const { data } = useRequest(fetchData, {
	// 	onSuccess() {},
	// })

	useEffect(() => {
		console.log(12)
	}, [])

	console.log(22)

	return <div>axios</div>
}

export default Twice
