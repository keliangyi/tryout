import { CdkDragDrop, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

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

interface IConetnt extends ICate {
    key: string
    showTitle: string
    placeholder?: string
}

const defaultCates: Array<ICate> = [
    { title: '单行文本', id: 1, icon: "icon-text" },
    { title: '多行文本', id: 2, icon: "icon-font-size" },
    { title: '数字', id: 3, icon: "icon-number" },
    { title: '日期时间', id: 4, icon: "icon-calendar" },
    { title: '单选', id: 5, icon: "icon-check-circle" },
    { title: '多选', id: 6, icon: "icon-check-square" },
    { title: '下拉框', id: 7, icon: "icon-down-square" },
    { title: '分割线', id: 8, icon: "icon-line" },
]

export class QuestionBase<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    order: number;
    controlType: string;
    type: string;
    options: { key: string, value: string }[];

    constructor(options: {
        value?: T;
        key?: string;
        label?: string;
        required?: boolean;
        order?: number;
        controlType?: string;
        type?: string;
        options?: { key: string, value: string }[];
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = !!options.required;
        this.order = options.order === undefined ? 1 : options.order;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.options = options.options || [];
    }
}

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit, AfterViewInit, OnChanges {

    @ViewChild('resultWrapper') public resultWrapper: ElementRef<Element> | undefined
    public rowHeight = innerHeight - 130
    public timer: ReturnType<typeof setInterval> | undefined
    public top: number = 0
    public editedKey: string = ''
    public categories: Array<ICate> = defaultCates
    public content: Array<IConetnt> = []
    public getCurrentField() {
        console.log(this.content.find(f => f.key === this.editedKey));
        return this.content.find(f => f.key === this.editedKey)
    }

    public propForm = new FormGroup({
        title: new FormControl(''),
        placeholder: new FormControl(''),
    })

    constructor(private rd2: Renderer2) { }

    ngOnInit(): void {
        this.handleWatchFormChange()

    }
    ngAfterViewInit() {
        // this.testScrollTop()
    }

    ngOnChanges(e: any) {
        console.log('ngOnChanges', e);

    }

    drop(event: CdkDragDrop<any[]>) {
        if (event.previousContainer !== event.container) {
            const randomKey = Math.random().toString(32).substring(2, 10)
            const initContent = {
                key: randomKey,
                placeholder: '',
                showTitle: true
            }
            const nr = event.previousContainer.data.map((i, idx) => {
                if (idx === event.previousIndex) {
                    return Object.assign(i, initContent)
                }
                Object.keys(initContent).forEach(key => {
                    Reflect.deleteProperty(i, key)
                })
                return i
            })
            copyArrayItem(nr,
                event.container.data,
                event.previousIndex,
                event.currentIndex)
            this.handleChangeActive(randomKey)

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

    handleChangeActive(key: string) {
        this.editedKey = key
        const currentItem = this.content.find(f => f.key === key)
        if (currentItem) {
            this.propForm.setValue({
                title: currentItem.title,
                placeholder: currentItem.placeholder
            })
        }
    }

    handleSave() {
        console.log(this.content);
        // this.content.find(f=>f.title === this.editedKey)
    }



    handleWatchFormChange() {
        this.propForm.valueChanges.subscribe(({ title, placeholder }) => {
            this.content = this.content.map(i => i.key === this.editedKey ? { ...i, title, placeholder } : i)
        })
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
