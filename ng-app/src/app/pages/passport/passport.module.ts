
import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { PassportRoutingModule } from './passport-routing.module';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CoreModule,
        PassportRoutingModule
    ]
})
export class PassportModule { }
