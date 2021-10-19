import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.less']
})
export class AddTaskComponent implements OnInit {

	text: string = ''
	day: string = ''
	reminder: boolean = false

	@Output() onSave = new EventEmitter()

	constructor() { }

	ngOnInit(): void { }

	handleSubmit() {
		if (!this.text) {
			alert('please add a new task')
			return
		}
		const newTask = {
			id: Date.now(),
			text: this.text,
			day: this.day,
			reminder: this.reminder
		}
		this.onSave.emit(newTask)
		this.text = ''
		this.day = ''
		this.reminder = false
	}
}
