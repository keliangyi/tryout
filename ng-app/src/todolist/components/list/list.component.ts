import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/todolist/todo.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

    constructor() { }

    @Input() list: Array<Todo> = []
    @Output() onToggle = new EventEmitter()

    selectedIndex: number = 0;

    setIndex(index: number) {
        this.selectedIndex = index;
    }

    ngOnInit(): void { }

    toggle(id: number) {

        this.onToggle.emit(id)
    }

}
