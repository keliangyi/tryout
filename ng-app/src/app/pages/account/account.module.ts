import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { JdyModuleModule } from 'src/app/jdy-module';

const routes: Routes = [
    { path: '', component: AccountComponent }
];

@NgModule({
    declarations: [
        AccountComponent,
    ],
    imports: [
        CommonModule,
        JdyModuleModule,
        RouterModule.forChild(routes),
    ]
})
export class AccountModule { }
