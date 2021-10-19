import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

interface UserInfo {
    name: string
    age: number
}

@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public userInfo: UserInfo | undefined
    public counter: number = 0 //这种方式在使用该数据的组建中只能手动调用获取，而不能实时变化
    public subject = new Subject<number>()

    constructor(private http: HttpClient) {


    }

    fetchUserInfo() {
        this.http.get<{ account: UserInfo }>('/v1').subscribe((r) => {
            console.log('AccountComponent', r);
            this.userInfo = r.account
        })
    }

    increaseCounter() {
        this.counter++
        this.subject.next(this.counter)
    }

    getCounter() {
        return this.subject.asObservable()
    }

}
