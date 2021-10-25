import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIndexComponent, InjectComponent, FlexGridComponent } from './index';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TestIndexComponent },
    { path: 'inject/:id', pathMatch: 'full', component: InjectComponent },
    { path: 'css-flex-grid', pathMatch: 'full', component: FlexGridComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
