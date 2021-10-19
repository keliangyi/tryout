import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
    constructor(private router: Router, private http: HttpClient) {

    }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        const xid = route.params.xid
        console.log(route.params.xid, state, 'LoginGuardGuard');
        this.http.get('/api/fun/getmenu?xid' + xid).subscribe(f => {
            console.log(f, 'http');
        })
        if (true) {
            return true
        }

        return this.router.parseUrl('/404');
    }

}
