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
    ImmerComponent,
    ObserverComponent,
    CatchErrorComponent
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
        ImmerComponent
    ],
    imports: [
        CoreModule,
        TestRoutingModule
    ]
})
export class TestModule { }
