import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-minmax',
    templateUrl: './minmax.component.html',
    styleUrls: ['./minmax.component.css']
})
export class MinmaxComponent implements OnInit {

    public min = -Infinity
    public max = Infinity

    @Output()
    public onModelChange = new EventEmitter()

    @Input()
    public get onModel(): number[] {
        return [this.min, this.max]
    }
    public set onModel(val: number[]) {
        this.min = val[0]
        this.max = val[1]
        this.onModelChange.emit(val)
    }
    constructor() { }

    ngOnInit() { }

    conChange(e: any, idx: number): void {
        const v = this.onModel.slice()
        v[idx] = Number(e.target.value)
        this.onModel = v
    }

}
