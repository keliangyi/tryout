import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ListComponent } from './list/list.component';
import { CoreModule } from 'src/app/core';


@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        CoreModule,
        ProjectRoutingModule
    ]
})
export class ProjectModule { }
