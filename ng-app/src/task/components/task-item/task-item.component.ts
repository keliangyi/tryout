
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './../../Task';

@Component({
	selector: 'app-task-item',
	templateUrl: './task-item.component.html',
	styleUrls: ['./task-item.component.less']
})
export class TaskItemComponent implements OnInit {
	@Input() task!: Task

	@Output() onDel = new EventEmitter()
	@Output() onToggle = new EventEmitter()

	constructor() { }



	ngOnInit(): void { }

	handleDel(task: Task) {
		this.onDel.emit(task)
	}

	handleToggle(task: Task) {
		this.onToggle.emit(task)
	}
}
