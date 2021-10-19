import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from 'src/app/app.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginGuardGuard } from './guard/login-guard.guard';
import { HttpClientModule } from '@angular/common/http';
import { JdyModuleModule } from './jdy-module/jdy-module.module';
import { NotfoundComponent } from './jdy-module/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



/**
 * ng 路由创建
 * 一个模块一个模块的按需懒加载，而不是每个页面加载一下
 * 一级(module)路由：
 * `ng generate module pages/data --route data --module app.module`
 *                     文件位置                 路由前缀
 * 
 * 1、`ng generate module pages/project --routing`
 * 2、`ng g c pages/project/list -m project.module`
 * 
 * 子级路由：
 * `ng g c pages/data/xiaoqu --m pages/data/data.module` 
 *  然后再 data.module 中指定path
 * 
 */

const routes: Routes = [
    { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
    { path: "404", component: NotfoundComponent },

    { path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule), canActivate: [LoginGuardGuard] },
    { path: 'form', loadChildren: () => import('./pages/form/form.module').then(m => m.FormModule), canActivate: [LoginGuardGuard] },
    { path: 'account', loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule), canActivate: [LoginGuardGuard] },
    { path: 'test', loadChildren: () => import('./pages/test/test.module').then(m => m.TestModule) },
    { path: "**", redirectTo: '/404', pathMatch: 'full' }
]

@NgModule({

    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        JdyModuleModule,
        BrowserAnimationsModule,
    ],
    declarations: [AppComponent,],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
