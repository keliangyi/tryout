import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { CoreModule } from 'src/app/core';
import { TestIndexComponent, InjectComponent, FlexGridComponent } from './index';


@NgModule({
    declarations: [
        TestIndexComponent,
        InjectComponent,
        FlexGridComponent
    ],
    imports: [
        CoreModule,
        TestRoutingModule
    ]
})
export class TestModule { }
