
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from './../../services/ui.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
	title: string = 'Task Tracker'
	showAddTask: boolean = false
	subscription!: Subscription

	constructor(private uiService: UiService) {
		this.subscription = this.uiService.onToggle().subscribe(v => {
			this.showAddTask = v
		})
	}



	ngOnInit(): void { }

	toggleAddTask() {
		this.uiService.toggleAddTask()
	}
}
