import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HeaderComponent } from './core';
import { AuthService, StoreService } from './services';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

    title: string = '微小区管理中心'
    yjMoney: number = 496.456

    @ViewChild('header') hd!: HeaderComponent
    public loading = false




    constructor(private store: StoreService, private auth: AuthService) {

    }

    ngOnInit(): void {
        // this.store.fetchAccount()
        // this.auth.authLoading$.subscribe(r => {
        //     this.loading = r
        // })
    }

    tirggerHeaderFn() {
        this.hd.changeTheme()
        console.log(this.hd.count);

    }

}
