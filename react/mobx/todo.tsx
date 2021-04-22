
import { createContext, useContext } from 'react'
import { makeAutoObservable, observable, computed, action, } from "mobx"
import { observer } from "mobx-react-lite"
import { Button, Cell, Panel } from 'zarm'
import axios from 'axios';


export interface ITodo {
    id: number;
    name: string;
    desc: string;
    done?: boolean;
}

class This {
    constructor(private name:string){

    }

    sayName(){
        console.log('hello 我叫：' + this.getName());               
    }

    getName(){
        return this.name
    }
}

// model
let id = 0
export class TodoStore {
    @observable todos:ITodo[] = []

    constructor() {
        makeAutoObservable(this)
    }
    
    @computed
    get doneCount () {
        return this.todos.filter(td => td.done).length
    }
    @computed
    get undoneCount(){
        return this.todos.filter(td => !td.done).length
    }

    @action.bound
    addNewTodo = (todo ?: ITodo) => {
        const i = id ++ 
        todo = todo ?? {
            id:i,
            name:`new task ${i}`,
            desc:`new task ${i} desc`,
            done:false
        }                
        this.todos = this.todos.concat(todo)
    }

    @action.bound
    removeTodoById = (id:number) => {
        this.todos = this.todos.filter(f => f.id !== id)
    }

    @action.bound
    toggleStatus = (id:number) => {
        this.todos = this.todos.map(f => f.id === id ? {
            ...f,
            done:!f.done
        } : f)
    }
    @action.bound
    ajax = async () => {
        const res = await axios.get('/index/jiekou/qianyue?todo=1')
        this.addNewTodo({
            name:res.data.xiaoquname,
            desc:res.data.xiaoquname,
            id:res.data.phone,
            done:true
        })
    }
}

const STORE_TODO = 'todoStore'


const createStore = () => {
    return {
        [STORE_TODO]:new TodoStore()
    }
}

const stores = createStore()

const StoresContext = createContext(stores)

const useStores = () => useContext(StoresContext)

const useTodoStore = () => {
    const { todoStore } = useStores()

    return todoStore
}











const TodoList:React.FC = observer(() => {
    const {  todos, toggleStatus, addNewTodo, doneCount  } = useTodoStore()
    
    
    return <div>
        <Panel>
            {
                todos.map(i=>(<Cell key={i.id} onClick={() => toggleStatus(i.id)} title={i.name} description={i.desc}>{ i.done ? 'done' : '-' }</Cell>))
            }
        </Panel>
        <div className="btns" style={{ padding:12 }}>
            <Button theme="primary" block onClick={() => addNewTodo()}>新建待办事项({doneCount})</Button>
        </div>
    </div>
})

const Head = observer(() => {
    const {  todos, doneCount  } = useTodoStore()
    console.log(todos);
    
    return <h2>{doneCount} =&gt; {todos.length}</h2>
})

const App = () => {
    return <StoresContext.Provider value={stores}>
        <Head />
        <TodoList />
    </StoresContext.Provider>
}

export default App