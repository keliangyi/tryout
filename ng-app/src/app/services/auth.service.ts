import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, of } from 'rxjs';
import { tap, switchMap } from 'rxjs/operators';
import { Account } from '.';

@Injectable({
    providedIn: 'root',
})
export class AuthService {

    public auth$ = new BehaviorSubject<Account | null>(null)
    public authLoading$ = new BehaviorSubject(false)

    constructor(private http: HttpClient) {

    }

    checkAuthentication() {
        return this.auth$.pipe(switchMap(r => {
            if (r) {
                return of(r)
            }
            this.authLoading$.next(true)
            return this.http.get<Account>('/b/617607c2aa02be1d445e555c/latest', {
                params: {
                    userName: '15000000000',
                    password: 'admin'
                }
            }).pipe(tap(c => {
                this.auth$.next(c)
                this.authLoading$.next(false)
            }))
        }))
    }

    login() {
        this.http.get<Account>('/b/617607c2aa02be1d445e555c/latest').subscribe(r => {
            this.auth$.next(r)
        })
    }

    logout(): void {
        // this.isLoggedIn = false;
    }
}