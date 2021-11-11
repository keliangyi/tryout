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

    // testScrollTop() {
    //     this.timer = setInterval(() => {
    //         if (this.resultWrapper?.nativeElement) {
    //             this.top += 100
    //             const domTop = this.resultWrapper.nativeElement.scrollTop
    //             if (this.top - 100 > domTop && domTop !== 0) {
    //                 clearInterval(this.timer!)
    //                 return
    //             }
    //             this.rd2.setProperty(this.resultWrapper.nativeElement, 'scrollTop', this.top)
    //         }
    //     }, 60)
    // }

}
