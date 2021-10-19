import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-button',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

	constructor() { }

	@Input() text: string = ''
	@Input() color: string = ''

	@Output() onClick = new EventEmitter()

	ngOnInit(): void { }

	handleClick() {
		this.onClick.emit()
	}

}
