import { Component, OnInit } from '@angular/core';
import { Todo, TodoService } from 'src/todolist/todo.service';


@Component({
    selector: 'app-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.less']
})
export class TodolistComponent implements OnInit {

    constructor(private todoService: TodoService) { }

    todos = this.todoService.todos

    ngOnInit(): void {

    }

    handleSave(item: Todo) {
        this.todoService.addTodo(item)
    }

    handleToggle(id: number) {
        console.log(id);

        this.todoService.toggle(id)
    }

}
