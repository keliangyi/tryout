import { Component, Inject, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { interval, Observable, of } from 'rxjs';
import { catchError, tap, timeout } from 'rxjs/operators';
import { appVersion } from 'src/app/app.module';

@Component({
    selector: 'app-inject',
    templateUrl: './inject.component.html',
    styleUrls: ['./inject.component.less']
})
export class InjectComponent implements OnInit {


    public endDate = new Date('2021-11-11 15:04:02')
    public money = '125743'
    public obj = {
        name: "maomao",
        age: 15,
        likes: ['吃饭', '睡觉', '打豆豆']
    }
    public object: { [key: number]: string } = { 1: '吃饭', 2: '睡觉', 3: '打豆豆' }

    public map = new Map([[2, 'foo'], [1, 'bar'], [3, '这是value']])

    public percent = 0.618321

    public timeout$ = interval(1000)

    public username = 'm'

    constructor(@Inject(appVersion) public version: string) {

    }

    ngOnInit(): void {
        this.testTimeout()
        const r = this.bigIntSum('4', '155')
        console.log('ff', r);

    }

    testTimeout() {
        this.timeout$.pipe(
            timeout(new Date('2021-10-22 11:42:30')),
            catchError((err: any) => {
                console.log(err);
                return of(`接受到一个错误：${err}`)
            }),
            tap(console.log)
        )
    }

    /**
     * 大数相加
     * 不能用bigInt
     * @param a 一个大数字
     * @param b 一个大数字
     */
    bigIntSum(a: string, b: string): string {
        const arrA = a.split('')
        const arrB = b.split('')
        const lenA = arrA.length
        const lenB = arrB.length
        const maxLen = Math.max(lenA, lenB)
        const res: number[] = []
        let isBigThanTen = false

        for (let i = 0; i < maxLen; i++) {
            let temp: number = 0

            let lastA = arrA.pop() || '0'
            let lastB = arrB.pop() || '0'
            temp = parseInt(lastA) + parseInt(lastB)
            if (isBigThanTen) {
                temp = temp + 1
            }

            if (Math.floor(temp / 10) > 0) {
                // 需要进位
                temp = temp % 10
                isBigThanTen = true
            } else {
                isBigThanTen = false
            }

            res.push(temp)

            if (i === maxLen - 1 && isBigThanTen) {
                res.push(1)
            }

        }

        return res.reverse().join('')
    }



}

