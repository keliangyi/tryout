import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

export interface User {
    id: string
    name: string
    age: number
}

@Injectable()
export class RxServiceService {


    subject$ = new Subject()
    // user$ = new Observable<User>()
    constructor() {

    }

    getData() {
        this.subject$.next()
        return this.subject$.asObservable()
    }



}
