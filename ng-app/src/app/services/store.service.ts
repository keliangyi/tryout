import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpRes } from '../interceptors';
import { ParamDecorator } from '../core';

interface UserInfo {
    name: string
    age: number
}

export interface Account {
    id: number
    name: string
    age: number
    sf: number
}



@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public userInfo: UserInfo | undefined
    public counter: number = 0 //这种方式在使用该数据的组建中只能手动调用获取，而不能实时变化
    public subject$ = new BehaviorSubject<number>(0)
    public account$ = new BehaviorSubject<Account | null>(null)
    public account: Account | undefined


    constructor(private http: HttpClient) {

    }

    testParamDecorator(age: number, @ParamDecorator('996') name: string) {
        console.log('ParamDecorator：', StoreService.prototype, age, name);
    }

    verifyToken() {

    }

    fetchAccount() {
        this.http.get<Account>('/users').subscribe(res => {
            this.account = res
            this.account$.next(res)
        })
    }

    fetchUserByid(id: string) {
        return this.http.get<Account[]>('/users', {
            params: {
                id
            }
        })
    }

    fetchJsonServer() {
        this.http.get<{ account: UserInfo }>('/users').subscribe((r) => {
            console.log('AccountComponent', r);
            this.userInfo = r.account
        })
    }

    increaseCounter() {
        this.counter++
        this.subject$.next(this.counter)
    }

    getCounter() {
        return this.subject$.asObservable()
    }

}
