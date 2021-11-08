import { CdkDragDrop, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';

type A = 'a' | 'b' | 'f'

type B = 'd' | 'f'
type Diff<T, U> = T extends U ? never : T;

type DiffAb = Diff<A, B> // ab

interface ICate {
    title: string
    id: number,
    icon?: string
    [key: string]: any
}


@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit, OnChanges {

    public rowHeight = innerHeight - 130

    @ViewChild('resultWrapper') public resultWrapper: ElementRef<Element> | undefined

    timer: ReturnType<typeof setInterval> | undefined
    top: number = 0
    editedKey: string = ''

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

    public content: Array<ICate> = []

    constructor(private rd2: Renderer2) { }


    drop(event: CdkDragDrop<any[]>) {
        if (event.previousContainer !== event.container) {
            const randomKey = Math.random().toString(32).substring(2, 10)
            const nr = event.previousContainer.data.map((i, idx) => {
                if (idx === event.previousIndex) {
                    return { ...i, key: randomKey }
                }
                Reflect.deleteProperty(i, 'key')
                return i
            })
            this.editedKey = randomKey
            copyArrayItem(nr,
                event.container.data,
                event.previousIndex,
                event.currentIndex)

        } else {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        if (event.previousContainer.data) {
            this.categories = this.categories.filter(f => !f.temp)
        }
    }

    exited(event: CdkDragExit<ICate[], any>) {
        const currentIdx = event.container.data.findIndex(f => f.id === event.item.data.id)
        this.categories.splice(currentIdx + 1, 0, { ...event.item.data, temp: true })
    }

    entered() {
        this.categories = this.categories.filter(f => !f.temp)
    }


    handleSave() {
        console.log(this.content);

    }


    ngOnInit(): void {

    }

    ngAfterViewInit() {
        // this.testScrollTop()
    }

    ngOnChanges() {
        console.log(this.content);

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
