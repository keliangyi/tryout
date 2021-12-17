import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIndexComponent, InjectComponent, FlexGridComponent, NgModelComponent, RxjsComponent } from './index';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TestIndexComponent },
    { path: 'inject/:id', pathMatch: 'full', component: InjectComponent },
    { path: 'css-flex-grid', pathMatch: 'full', component: FlexGridComponent },
    { path: 'ngmodel', pathMatch: 'full', component: NgModelComponent },
    { path: 'rxjs', pathMatch: 'full', component: RxjsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
