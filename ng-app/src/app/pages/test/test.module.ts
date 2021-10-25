import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { JdyModuleModule } from 'src/app/jdy-module';
import { TestIndexComponent, InjectComponent, FlexGridComponent } from './index';


@NgModule({
    declarations: [
        TestIndexComponent,
        InjectComponent,
        FlexGridComponent
    ],
    imports: [
        JdyModuleModule,
        TestRoutingModule
    ]
})
export class TestModule { }
