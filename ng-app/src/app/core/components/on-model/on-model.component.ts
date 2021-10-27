import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-on-model',
    templateUrl: './on-model.component.html',
    styleUrls: ['./on-model.component.less']
})
export class OnModelComponent implements OnInit {

    private _val: string = ''

    @Output() onModelChange = new EventEmitter()

    @Input()
    public get onModel(): string {
        return this._val
    }

    public set onModel(v: string) {
        this._val = v;
        this.onModelChange.emit(v)
    }
    constructor() { }

    ngOnInit(): void { }

    onChange(e: any) {
        console.log(e.target.value);
        this.onModel = e.target.value
    }

}
