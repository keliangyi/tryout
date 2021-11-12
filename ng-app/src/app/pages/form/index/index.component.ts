import { CdkDragDrop, CdkDragStart, moveItemInArray, copyArrayItem, transferArrayItem, CdkDragExit } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { filter, tap } from 'rxjs/operators';
import { deepClone } from 'src/utils';
import { defaultCates, Field, ICate } from '../field';



@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class IndexComponent implements OnInit {

    public categories: Array<ICate> = defaultCates
    public content: Array<Field> = []
    public active?: Field
    public propForm = new FormGroup({
        label: new FormControl(''),
        showLabel: new FormControl(true),
    })

    constructor(private rd2: Renderer2) { }

    ngOnInit(): void {
        this.handleWatchFormChange()
    }

    drop(event: CdkDragDrop<Array<ICate>> | CdkDragDrop<Array<Field>>) {
        if (event.previousContainer !== event.container) {
            const curretnt = (event.previousContainer.data as ICate[])[event.previousIndex]
            const newField = new Field({ controlType: curretnt.id, label: curretnt.title, settings: curretnt.settings })
            this.content.splice(event.currentIndex, 0, newField)
            this.handleChangeActive(newField.key)
        } else {
            moveItemInArray(event.container.data as Array<Field>, event.previousIndex, event.currentIndex);
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
        const currentItem = this.content.find(f => f.key === key)
        if (this.active) {
            this.active.settings.forEach(setting => {
                //https://github.com/angular/angular/issues/20439
                this.propForm.removeControl(setting.name, { emitEvent: false })
            })
        }
        this.active = currentItem
        if (currentItem) {
            const vals = Object.create({})
            currentItem.settings.forEach(setting => {
                this.propForm.addControl(setting.name, new FormControl(), { emitEvent: false })
                vals[setting.name] = currentItem.attr[setting.name] ?? setting.defaultValue
            })
            this.propForm.setValue({
                label: currentItem.label,
                showLabel: currentItem.showLabel,
                ...vals
            })
        }
    }


    handleWatchFormChange() {
        this.propForm.valueChanges.pipe(
            // filter(_ => this.pauseForm),
        ).subscribe((vals) => {
            const { label, showLabel, ...rest } = vals
            this.content = this.content.map(i => {
                if (i.key === this.active!.key) {
                    i.label = label
                    i.showLabel = showLabel
                    Object.entries(rest).forEach(([k, v]) => {
                        i['attr'][k] = v
                    })
                }
                return i
            })
        })
    }


    handleCopy(e: MouseEvent, item: Field, index: number) {
        e.preventDefault()
        this.content.splice(index, 0, new Field(deepClone(item)))
    }

    handleDelete(e: MouseEvent, item: Field, index: number) {
        e.preventDefault()
        this.content = this.content.filter(f => f.key !== item.key)
        const next = this.content[index]
        if (next) {
            this.handleChangeActive(next.key)
        } else {
            this.propForm.reset()
            this.active = void 0
        }
    }

    handleSave() {
        console.log(this.content);
    }




}
