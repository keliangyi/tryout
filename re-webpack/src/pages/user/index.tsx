import { FC, useCallback, useState } from 'react'
import produce, { freeze } from "immer"
import { useImmer } from '@/hooks'


const User: FC = () => {

    const [ state, setState ] = useImmer<string[]>(['a','b','c','d'])


    const handleChange = (v:string) => {
        setState(df => {
            // df.
        })
    }


	const [ todos, setTodos] = useState(freeze( [
		{
			id: 'React',
			title: 'Learn React',
			done: true,
		},
		{
			id: 'Immer',
			title: 'Try Immer',
			done: false,
		},
	], true ))

    const o = {
        id: 'React',
        title: 'Learn React',
        done: true,
    }
    // const ofc = 
    // o.id = 'da'
    // console.log(o,ofc);
    

	const handleToggle = useCallback((id) => {
      

        
		setTodos(
			produce((draft) => {                
				const todo = draft.find((todo) => todo.id === id)!
				todo.done = !todo.done
			})
		)
	}, [])
    console.log(todos);
    
	const handleAdd = useCallback(() => {
		setTodos(
			produce((draft) => {
				draft.push({
					id: 'todo_' + Math.random(),
					title: 'A new todo',
					done: false,
				})
			})
		)
	}, [])

	return <div>
        <div style={{ height:100 }}></div>
        <ul>
            {
                todos.map(i=><li key={i.id} onClick={() => handleToggle(i.id) }>{i.title} ---- {i.done ? '√' : '×'}</li>)
            }
        </ul>
    </div>
}

export default User
