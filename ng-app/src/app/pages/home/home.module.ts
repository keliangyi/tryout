import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { JdyModuleModule } from 'src/app/jdy-module';


const routes: Routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        JdyModuleModule,
        RouterModule.forChild(routes)
    ]
})
export class HomeModule { }
