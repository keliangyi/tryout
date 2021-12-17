import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

    subject$ = new Subject<string>()

    constructor() { }

    ngOnInit() {
        this.subject$.subscribe((data) => {
            console.log("Subscriber 1 got data >>>>> " + data);
        });
        this.subject$.subscribe((data) => {
            console.log("Subscriber 2 got data >>>>> " + data);
        });


    }

    changeData() {
        this.subject$.next("Eureka");
    }

}
