import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { filter, map, takeWhile, tap } from 'rxjs/operators';

@Component({
    selector: 'app-count-down',
    templateUrl: './count-down.component.html',
    styleUrls: ['./count-down.component.less']
})
export class CountDownComponent implements OnInit {

    public countDown$!: Observable<string>
    @Input() start = new Date()
    @Input() end!: Date

    private ONE_MINUTE = 1000

    constructor() { }

    ngOnInit(): void {
        this.countDown$ = this.createCountDown(this.start, this.end)
    }

    createCountDown(start: Date, end: Date): Observable<string> {
        const diffSec = Math.floor((end.getTime() - start.getTime()) / this.ONE_MINUTE)
        return interval(1000).pipe(
            map(counter => diffSec - counter),
            takeWhile(gap => gap >= 0),
            // filter(gap => gap % 2 === 0),
            map(sec => ({
                day: Math.floor(sec / 60 / 60 / 24).toString(),
                hour: Math.floor((sec / 60 / 60) % 24).toString().padStart(2, '0'),
                minute: Math.floor((sec / 60) % 60).toString().padStart(2, '0'),
                second: Math.floor(sec % 60).toString().padStart(2, '0'),
            })),
            // tap(console.log),
            map(({ day, hour, minute, second }) => `${day}天${hour}时${minute}分${second}秒`)
        )
    }


}
