import { NgModule } from '@angular/core';

import { TestRoutingModule } from './test-routing.module';
import { CoreModule } from 'src/app/core';
import {
    TestIndexComponent,
    InjectComponent,
    FlexGridComponent,
    NgModelComponent,
    MinmaxComponent,
    RxjsComponent,
    ObserverComponent,
    CatchErrorComponent,
    FlatOperatorComponent
} from './index';
import { SubscribeOneComponent } from './subscribe-one/subscribe-one.component';
import { SubscribeTwoComponent } from './subscribe-two/subscribe-two.component';


@NgModule({
    declarations: [
        TestIndexComponent,
        InjectComponent,
        FlexGridComponent,
        NgModelComponent,
        MinmaxComponent,
        RxjsComponent,
        SubscribeOneComponent,
        SubscribeTwoComponent,
        ObserverComponent,
        CatchErrorComponent,
        FlatOperatorComponent
    ],
    imports: [
        CoreModule,
        TestRoutingModule
    ]
})
export class TestModule { }
