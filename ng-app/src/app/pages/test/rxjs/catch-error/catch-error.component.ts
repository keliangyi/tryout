import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-catch-error',
    templateUrl: './catch-error.component.html',
    styleUrls: ['./catch-error.component.css']
})
export class CatchErrorComponent implements OnInit {

    constructor(
        private http: HttpClient
    ) { }

    public user$ = new Observable<Record<string, string>>()

    ngOnInit() {
    }

    getData() {
        // this.user$ =
        this.http.get<Record<string, string>>('https://random-data-api.com/api/name/random_name').subscribe(res => {
            const r = res.first_name.toUpperCase()
            console.log(r, res, 'ddd');

        })
        // .subscribe(console.log)
    }

}
