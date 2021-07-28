import { makeAutoObservable } from 'mobx';
import React, { useContext, createContext, FC } from 'react';


export interface ITodo {
    id: number;
    name: string;
    desc: string;
    done?: boolean;
}

class Todo {
    list : ITodo[] = []

    constructor(){
        makeAutoObservable(this)
    }

    get count(){
        return this.list.length
    }

    createTodo(todo:Omit<ITodo,'id'>){
        console.log(this.list);
        
        this.list = this.list.concat({ id:Math.random(), name:todo.name, desc:todo.desc, done:false })
    }
}

const TodoContext = createContext(new Todo())

const TodoProvider:FC = ({ children }) => {    
    return <TodoContext.Provider value={new Todo()}>{ children }</TodoContext.Provider>
}


const useTodo = () => {
    return new Todo()
}

const Tc = new Todo()
export { TodoContext,  TodoProvider, Tc, useTodo }