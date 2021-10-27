import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CoreModule } from 'src/app/core';


const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CoreModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }
