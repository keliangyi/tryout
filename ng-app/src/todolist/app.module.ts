import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './pages/app.component';
import { TodolistComponent } from './pages/todolist/todolist.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';


@NgModule({
	imports: [
		BrowserModule,
		ReactiveFormsModule,
		HttpClientModule,
		RouterModule.forRoot([
			{ path: '', component: AppComponent },
		]),
	],
	declarations: [
		AppComponent,
		TodolistComponent,
		ListComponent,
		CreateComponent
	],
	bootstrap: [AppComponent],
})
export class AppModule { }

