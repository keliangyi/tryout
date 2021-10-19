import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

interface NavItem {
    title: string
    url: string
}

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

    public theme: 'light' | 'dark' = 'light'
    public count: number = 0
    public navs: NavItem[] = [
        { title: '控制台', url: '/' },
        { title: '项目', url: 'project/list' },
        { title: '账号设置', url: 'account' },
        { title: '测试', url: '/test/decorator' },
    ]

    constructor(private store: StoreService) { }

    ngOnInit(): void {
        this.store.subject.subscribe((c) => {

            this.count = c
        })
    }

    changeTheme() {
        // alert('this is an alert from header!')
        this.theme = this.theme === 'dark' ? 'light' : 'dark'
    }

    getCounter() {
        const conter = this.count
        alert(conter)
    }
}
