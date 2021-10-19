
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import TASKS from '../mock-tasks';
import { Task } from './../Task';

const httpOptions = {
	headers: new HttpHeaders({
		"Content-Type": 'application/json'
	})
}

@Injectable({
	providedIn: 'root'
})
export class TaskService {

	private apiUrl = 'http://localhost:4300/tasks'

	constructor(private http: HttpClient) { }


	getTask(): Observable<Array<Task>> {
		return this.http.get<Array<Task>>(this.apiUrl)
	}

	deleteTask(task: Task): Observable<Task> {
		const url = `${this.apiUrl}/${task.id}`
		return this.http.delete<Task>(url)
	}

	updateTaskReminder(task: Task) {
		const url = `${this.apiUrl}/${task.id}`
		return this.http.put<Task>(url, task, httpOptions)
	}

	addTask(task: Task) {
		return this.http.post<Task>(this.apiUrl, task, httpOptions)
	}
}
