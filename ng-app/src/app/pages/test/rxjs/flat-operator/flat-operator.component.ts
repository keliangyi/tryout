import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-flat-operator',
    templateUrl: './flat-operator.component.html',
    styleUrls: ['./flat-operator.component.css']
})
export class FlatOperatorComponent implements OnInit {

    @ViewChild('search', { static: true }) input!: ElementRef
    @ViewChild('fetch', { static: true, read: ElementRef }) btn!: ElementRef

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {

    }

    ngAfterViewInit() {
        fromEvent(this.btn.nativeElement, 'click').pipe(
            map(() => this.input.nativeElement.value),
            switchMap(kw => this.http.get(`https://random-data-api.com/api/${kw}/random_${kw}`))
        ).subscribe({
            next: console.log,
            error: console.error,
            complete: () => console.log('Completed')
        })
    }
}
