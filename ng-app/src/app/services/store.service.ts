import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ParamDecorator } from '../jdy-module';

interface UserInfo {
    name: string
    age: number
}

export interface Account {
    menu: any[]
    daishenhe_zhuhu: number
    shengfen: string
    tree_queding: boolean
    yonghu: {
        name: string
        nickname: string
        phone: string
        touxiang: string
        userid: number
        userlevel: number
        company_name: string
        yonghuming: string
        [Key: string]: any
    }
}



@Injectable({
    providedIn: 'root'
})
export class StoreService {

    public userInfo: UserInfo | undefined
    public counter: number = 0 //这种方式在使用该数据的组建中只能手动调用获取，而不能实时变化
    public subject$ = new Subject<number>()
    public account$ = new Subject<Account>()
    public account: Account | undefined


    constructor(private http: HttpClient) {
        console.log(this.testParamDecorator(5, '装饰器'));
    }

    testParamDecorator(age: number, @ParamDecorator('996') name: string) {

        console.log('ParamDecorator：', StoreService.prototype, age, name);
    }

    fetchAccount() {
        this.http.get<{ data: Account }>('/api/fun/getmenu').subscribe(res => {
            this.account = res.data
            this.account$.next(res.data)
        })
    }

    fetchJsonServer() {
        this.http.get<{ account: UserInfo }>('/v1').subscribe((r) => {
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
