import { CdkDragDrop, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

type A = 'a' | 'b' | 'f'

type B = 'd' | 'f'
type Diff<T, U> = T extends U ? never : T;

type DiffAb = Diff<A, B> // ab

interface ICate {
    title: string
    id: number,
    icon?: string
}

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

    public categories: Array<ICate> = [
        { title: '单行文本', id: 1 },
        { title: '多行文本', id: 2 },
        { title: '数字', id: 3 },
        { title: '日期时间', id: 4 },
        { title: '单选', id: 5 },
        { title: '多选', id: 6 },
        { title: '下拉框', id: 7 },
        { title: '分割线', id: 8 },
    ]

    public content: Array<ICate> = [

    ]

    constructor(private rd2: Renderer2) { }

    todo = [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
    ];
    done = [
        'Get up',
        'Brush teeth',
        'Take a shower',
        'Check e-mail',
        'Walk dog'
    ];
    drop(event: CdkDragDrop<any[]>) {

        if (event.previousContainer !== event.container) {
            copyArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        } else {

            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);

        }

    }

    exited(event: CdkDragExit<any[]>) {
        console.log('exited', event);
        console.log(this.categories);

    }
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
