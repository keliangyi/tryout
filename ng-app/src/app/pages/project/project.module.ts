import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { JdyModuleModule } from 'src/app/jdy-module';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        JdyModuleModule,
        ProjectRoutingModule
    ]
})
export class ProjectModule { }
