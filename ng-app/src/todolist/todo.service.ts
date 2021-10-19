import { Injectable } from '@angular/core';


export interface Todo {
	id: number
	title: string
	done: boolean
}


@Injectable({
	providedIn: 'root'
})
export class TodoService {
	todos: Array<Todo> = [
		{ id: 1, title: 'this is an angular todolist app', done: true }
	]
	constructor() { }

	addTodo(t: Todo) {
		this.todos.push(t)
	}

	toggle(id: number) {
		this.todos = this.todos.map(i => i.id === id ? { ...i, done: !i.done } : i)
		console.log(this.todos);

	}
}
