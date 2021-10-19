import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.less']
})
export class CreateComponent implements OnInit {

	constructor(private form: FormBuilder,) { }

	@Output() onSubmit = new EventEmitter()

	todoForm = this.form.group({
		title: '',
		done: false
	})

	ngOnInit(): void {
	}

	handleSubmit() {
		const { title, done } = this.todoForm.value
		if (!title) {
			alert('请输入title')
			return
		}
		this.onSubmit.emit({
			id: Date.now(),
			title,
			done
		})
		this.todoForm.reset()
	}

}
