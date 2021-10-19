import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './jdy-module';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    title: string = '微小区管理中心'
    yjMoney: number = 496.456

    @ViewChild('header') hd!: HeaderComponent

    constructor(private http: HttpClient) {

    }


    ngOnInit(): void {

    }

    tirggerHeaderFn() {
        this.hd.changeTheme()
        console.log(this.hd.count);

    }

}
