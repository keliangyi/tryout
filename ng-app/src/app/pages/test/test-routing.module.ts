import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecoratorComponent } from './decorator/decorator.component';
import { InjectComponent } from './inject/inject.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/test/inject' },
    { path: 'decorator', component: DecoratorComponent },
    { path: 'inject', component: InjectComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TestRoutingModule { }
