import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestIndexComponent, InjectComponent, FlexGridComponent, NgModelComponent, RxjsComponent, ImmerComponent } from './index';
import { SubscribeOneComponent } from './subscribe-one/subscribe-one.component';
import { SubscribeTwoComponent } from './subscribe-two/subscribe-two.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: TestIndexComponent },
    { path: 'inject/:id', pathMatch: 'full', component: InjectComponent },
    { path: 'css-flex-grid', pathMatch: 'full', component: FlexGridComponent },
    { path: 'ngmodel', pathMatch: 'full', component: NgModelComponent },
    { path: 'rxjs', pathMatch: 'full', component: RxjsComponent },
    { path: 'subs-1', pathMatch: 'full', component: SubscribeOneComponent },
    { path: 'subs-2', pathMatch: 'full', component: SubscribeTwoComponent },
    { path: 'immer', pathMatch: 'full', component: ImmerComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
