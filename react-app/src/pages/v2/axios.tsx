import { useRequest } from 'ahooks'
import { http } from '../../framework/axios.config'
import React, { useEffect } from 'react'

import { Options, Service } from 'ahooks/lib/useRequest/src/types'
import axios, { AxiosRequestConfig, AxiosPromise, AxiosResponse } from 'axios'

type Iparmas = Pick<AxiosRequestConfig, 'url' | 'method' | 'data'>
// type Service<TData, TParams extends any[]> = (...args: TParams) => Promise<TData>;

function useHttp<TData, TParams extends any[] = []>(
	parmas: Iparmas,
	options?: Options<TData, TParams>
) {
	const result = useRequest(async (..._) => {
		parmas.method = parmas.method ?? 'GET'
		const tempRes: { data: TData } = await http(parmas)
		if (Array.isArray(tempRes)) {
			return tempRes as any
		}
		return tempRes.data
	}, options)

	return result
}

const TestAxios: React.FC = React.memo(() => {
	const fetchData = () => {
		return http({
			url: 'https://random-data-api.com/api/coffee/random_coffee',
		})
	}

	// const { data } = useRequest(fetchData, {
	// 	onSuccess() {},
	// })

	const { data } = useHttp({
		url: 'https://random-data-api.com/api/coffee/random_coffee',
	})

	console.log(data, '===')
	if (!data) {
		return null
	}
	return <div>{data.blend_name}</div>
})

export default TestAxios
