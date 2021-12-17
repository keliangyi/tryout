import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { CoreModule } from 'src/app/core';
import { TestIndexComponent, InjectComponent, FlexGridComponent, NgModelComponent, MinmaxComponent, RxjsComponent } from './index';


@NgModule({
    declarations: [
        TestIndexComponent,
        InjectComponent,
        FlexGridComponent,
        NgModelComponent,
        MinmaxComponent,
        RxjsComponent
    ],
    imports: [
        CoreModule,
        TestRoutingModule
    ]
})
export class TestModule { }
