import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { CoreModule } from 'src/app/core';

const routes: Routes = [
    { path: '', component: AccountComponent }
];

@NgModule({
    declarations: [
        AccountComponent,
    ],
    imports: [
        CommonModule,
        CoreModule,
        RouterModule.forChild(routes),
    ]
})
export class AccountModule { }
