import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

type A = 'a' | 'b' | 'f'

type B = 'd' | 'f'
type Diff<T, U> = T extends U ? never : T;

type DiffAb = Diff<A, B> // ab


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit {

    public rowHeight = innerHeight - 130

    @ViewChild('resultWrapper') public resultWrapper: ElementRef<Element> | undefined

    timer: ReturnType<typeof setInterval> | undefined
    top: number = 0

    constructor(private rd2: Renderer2) { }

    ngOnInit(): void { }

    ngAfterViewInit() {
        // this.testScrollTop()
    }

    testScrollTop() {
        this.timer = setInterval(() => {
            if (this.resultWrapper?.nativeElement) {
                this.top += 100
                const domTop = this.resultWrapper.nativeElement.scrollTop
                if (this.top - 100 > domTop && domTop !== 0) {
                    clearInterval(this.timer!)
                    return
                }
                this.rd2.setProperty(this.resultWrapper.nativeElement, 'scrollTop', this.top)
            }
        }, 60)
    }
}
