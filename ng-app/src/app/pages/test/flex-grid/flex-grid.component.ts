import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-flex-grid',
    templateUrl: './flex-grid.component.html',
    styleUrls: ['./flex-grid.component.less']
})
export class FlexGridComponent implements OnInit {

    public navs = ['Xiaomi手机', 'Redmi 红米', '电视', '笔记本', '平板', '家电', '路由器', '智能硬件', '服务', '社区']

    constructor() { }

    ngOnInit() {
    }

}
