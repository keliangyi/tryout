import { Component, OnInit } from '@angular/core';
import { combineLatest, forkJoin, interval, Observable, of, PartialObserver } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-observer',
    templateUrl: './observer.component.html',
    styleUrls: ['./observer.component.css']
})
export class ObserverComponent implements OnInit {

    constructor() { }

    name$ = new Observable<string>(subscriber => {

        console.log('observer executed');

        subscriber.next('Alice')
        subscriber.next('Ben')
        // subscriber.error('dafg')
        // console.log('after error');
        setTimeout(() => { subscriber.next('Charlie') }, 2000)
        setTimeout(() => { subscriber.complete() }, 4000)

        return () => {
            console.log('Teardown after completed or error');
        }
    })

    basic() {
        const observer: PartialObserver<string> = {
            complete() {
                console.log('completed')
            },
            error(err) {
                console.error(err)
            },
            next(v: string) {
                console.log('name:', v)
            }
        }
        console.log('before subscribe');
        const subs = this.name$.subscribe(observer)
        console.log('after subscribe');

        setTimeout(() => {
            console.log(4578);

            subs.unsubscribe()
        }, 2000)
    }

    interval() {
        const interval$ = new Observable<number>(subscriber => {
            let i = 0
            const timer = setInterval(() => {
                subscriber.next(i)
                i++
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        })

        const subs = interval$.subscribe(console.log)
        setTimeout(() => {
            subs.unsubscribe()
        }, 7000)
    }

    combine() {
        const a$ = interval(1000).pipe(take(10))
        const b$ = new Observable<number>(subscriber => {
            let i = 0
            const timer = setInterval(() => {
                if (i === 4) {
                    subscriber.complete()
                } else {
                    subscriber.next(i)
                }
                i++
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        })

        const combine$ = combineLatest([a$, b$]).subscribe({
            next: console.log,
            complete: () => console.log('Completed'),
            error: (err) => console.error('err:', err),
        })
    }

    fork() {
        const a$ = new Observable<number>(subscriber => {
            let i = 0
            const timer = setInterval(() => {
                if (i === 4) {
                    subscriber.complete()
                } else {
                    subscriber.next(i)
                }
                i++
            }, 1000)
            return () => {
                clearInterval(timer)
            }
        })
        const b$ = of(2, 4, 6)
        const fork$ = forkJoin([a$, b$]).subscribe({
            next: console.log,
            complete: () => console.log('Completed'),
            error: (err) => console.error('err:', err),
        })
    }

    ngOnInit() {
        // this.basic()
        // this.interval()
        // this.fork()
        this.combine()

    }

}
