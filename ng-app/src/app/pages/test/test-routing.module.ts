import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InjectComponent } from './index/inject.component';

const routes: Routes = [
    { path: ':id', pathMatch: 'full', component: InjectComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
