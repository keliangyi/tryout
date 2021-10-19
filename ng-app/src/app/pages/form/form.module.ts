import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { JdyModuleModule } from 'src/app/jdy-module';
import { IndexComponent } from './index/index.component';


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        JdyModuleModule,
        FormRoutingModule
    ]
})
export class FormModule { }
