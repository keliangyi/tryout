import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { JdyModuleModule } from 'src/app/jdy-module';
import { InjectComponent } from './index/inject.component';


@NgModule({
    declarations: [
        InjectComponent
    ],
    imports: [
        JdyModuleModule,
        TestRoutingModule
    ]
})
export class TestModule { }
