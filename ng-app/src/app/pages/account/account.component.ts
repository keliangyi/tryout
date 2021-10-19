import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

export enum userSf {
    user = 0,
    admin = 1,
    sub = 2,
    super = 3,
}

interface Account {
    name: string
    age: number
}

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit, AfterViewInit, OnDestroy {


    public userSf = userSf
    public sf: userSf = userSf.sub
    public yjMoney: number = 156.664
    public account: Account | undefined
    public flag: boolean = true
    public count: number = 0
    public timer: ReturnType<typeof setInterval> | undefined
    public store$: Subscription | undefined

    @ViewChild('acc', { static: true }) myacc: ElementRef<HTMLDivElement> | undefined


    constructor(private store: StoreService) { }

    ngOnInit(): void {
        this.store$ = this.store.subject.subscribe((c) => {
            this.count = c
        })

        this.timer = setInterval(() => {
            this.increaseCounter()
        }, 1000)
    }

    ngOnDestroy() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    ngAfterViewInit() {
        // dom 加载完成

        //原生的方式
        const dom = <HTMLDivElement>document.getElementById('flag')
        dom.style.color = 'red'
        console.log(dom);

        //viewChildref
        const vc = this.myacc?.nativeElement
        console.log(vc);
    }

    calculate() {
        this.yjMoney = Math.random() * 100
        this.store.fetchUserInfo()
    }

    increaseCounter() {
        this.store.increaseCounter()
    }
}
