import { Component, Inject, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject, fromEvent, interval, Observable, of, Subject, } from 'rxjs';
import { catchError, delay, map, switchMap, takeWhile, tap, timeout, filter, } from 'rxjs/operators';
import { appVersion } from 'src/app/app.module';
import { HttpRes } from 'src/app/interceptors';
import { Confirmable, Emoji } from 'src/app/jdy-module';
import { Account, StoreService } from 'src/app/services';

@Component({
    selector: 'app-test-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.less']
})
export class TestIndexComponent implements OnInit {



    public counter: number | undefined


    constructor(
        @Inject(appVersion) public version: string,
        private route: ActivatedRoute,
        private router: Router,
        private store: StoreService) {

    }

    ngOnInit(): void {


    }


}

