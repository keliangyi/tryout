import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { DecoratorComponent } from './decorator/decorator.component';
import { JdyModuleModule } from 'src/app/jdy-module';
import { InjectComponent } from './inject/inject.component';


@NgModule({
    declarations: [
        DecoratorComponent,
        InjectComponent
    ],
    imports: [
        JdyModuleModule,
        TestRoutingModule
    ]
})
export class TestModule { }
