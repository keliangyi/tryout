import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './jdy-module';
import { StoreService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    title: string = '微小区管理中心'
    yjMoney: number = 496.456

    @ViewChild('header') hd!: HeaderComponent

    constructor(private store: StoreService) {

    }

    ngOnInit(): void {
        this.store.fetchAccount()
    }

    tirggerHeaderFn() {
        this.hd.changeTheme()
        console.log(this.hd.count);

    }

}
