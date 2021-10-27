import { NgModule } from '@angular/core';

import { FormRoutingModule } from './form-routing.module';
import { CoreModule } from 'src/app/core';
import { IndexComponent } from './index/index.component';


@NgModule({
    declarations: [
        IndexComponent
    ],
    imports: [
        CoreModule,
        FormRoutingModule
    ]
})
export class FormModule { }
