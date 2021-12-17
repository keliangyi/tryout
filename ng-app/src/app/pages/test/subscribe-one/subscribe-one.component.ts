import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-subscribe-one',
    templateUrl: './subscribe-one.component.html',
    styleUrls: ['./subscribe-one.component.less']
})
export class SubscribeOneComponent implements OnInit, OnDestroy {

    counter$?: Observable<number>
    unMount$ = new Subject<void>()

    constructor() { }

    ngOnInit(): void {
        interval(500).pipe(takeUntil(this.unMount$)).subscribe(console.log)
    }
    ngOnDestroy(): void {
        this.unMount$.next()
    }

}
