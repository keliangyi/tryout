import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { filter, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


export interface MenuItem {
    title: string
    url: string
    icon?: string
    prefix?: string
}

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

    color: string = ''

    public menus: Array<MenuItem> = [
        { title: '控制台', url: "/", icon: "icon-home-fill", },
        { title: '项目管理', url: "/project/list", icon: 'icon-appstore-fill', prefix: '/project' },
        { title: '表单设置', url: 'form', icon: 'icon-form', prefix: '/project' },
        { title: '个人中心', url: 'account', icon: 'icon-yonghu', prefix: '/account' },
        { title: '测试一下', url: '/test', icon: 'icon-rocket-fill', prefix: '/test' },
    ]

    constructor(private router: Router) { }

    ngOnInit(): void {



    }


}
