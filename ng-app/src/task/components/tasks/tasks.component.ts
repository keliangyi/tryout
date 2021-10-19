
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service'

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.less'],
    // encapsulation: ViewEncapsulation.ShadowDom
})
export class TasksComponent implements OnInit {

    tasks: Array<Task> = []
    showAddTask: boolean = false
    subscription!: Subscription

    constructor(private taskService: TaskService, private uiService: UiService) {
        this.subscription = this.uiService.onToggle().subscribe(v => {
            this.showAddTask = v
        })
    }

    ngOnInit(): void {
        this.taskService.getTask().subscribe((tasks) => {
            this.tasks = tasks
        })
    }

    handleDel(task: Task) {
        this.taskService.deleteTask(task).subscribe(() => {
            this.tasks = this.tasks.filter(f => f.id !== task.id)
        })
    }

    handleToggle(task: Task) {
        task.reminder = !task.reminder
        this.taskService.updateTaskReminder(task).subscribe()
    }

    handleSave(v: Task) {
        this.taskService.addTask(v).subscribe((task) => {
            this.tasks.push(task)
        })
    }

}
