import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { DecoratorComponent } from './decorator/decorator.component';
import { JdyModuleModule } from 'src/app/jdy-module';


@NgModule({
    declarations: [
        DecoratorComponent
    ],
    imports: [
        JdyModuleModule,
        TestRoutingModule
    ]
})
export class TestModule { }
