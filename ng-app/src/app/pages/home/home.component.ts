import { Component, OnInit } from '@angular/core';

const colspans = [18, 6, 8, 8, 8, 12, 12]

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

    public cards = Array.from(new Array(7).keys()).map(i => ({ title: `项目${i + 1}`, colspan: colspans[i] }))
    constructor() { }

    ngOnInit(): void {
    }

}
