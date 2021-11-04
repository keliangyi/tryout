import { createContext, Dispatch, FC, useEffect, useReducer } from 'react'

type User = {
	name: string
	age: number
}

export enum ActionType {
	AddUser,
	UpdateUser,
	Clear,
}

type GlobalActions =
	| {
			type: ActionType.AddUser
			payload: User
	  }
	| {
			type: ActionType.UpdateUser
			payload: Partial<User>
	  }
	| {
			type: ActionType.Clear
	  }

const appReducer = (state: User | null, action: GlobalActions): User | null => {
	switch (action.type) {
		case ActionType.AddUser:
			return action.payload
		case ActionType.UpdateUser:
			return { ...state!, ...action.payload }
		case ActionType.Clear:
			return null
		default:
			throw new Error('action type 不存在')
	}
}

export const GlobalContext = createContext<{
	store: User | null
	dispatch: Dispatch<GlobalActions>
}>({
	store: null,
	dispatch: () => void 0,
})

export const AppGlobal: FC = ({ children }) => {
	const [store, dispatch] = useReducer(appReducer, null)
	useEffect(() => {
		async function fetchData() {
			const response = await fetch(
				'http://192.168.1.250:9098/api/test/jingtai?id=1'
			)
			const result = await response.json()
			dispatch({
				type: ActionType.AddUser,
				payload: { name: 'maomao', age: result.data },
			})
		}
		fetchData()
	}, [])
	return (
		<GlobalContext.Provider value={{ store, dispatch }}>
			{children}
		</GlobalContext.Provider>
	)
}
