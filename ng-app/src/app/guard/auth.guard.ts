import { AuthService } from 'src/app/services';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { Identity } from '../core/pipes/identity.pipe';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    // constructor(private router: Router, private store: StoreService) {

    // }

    // canActivate(
    //     route: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot,
    // ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //     console.log(this.store.account);

    //     if (this.store.account) {
    //         if (this.store.account.sf !== 0) {
    //             return false
    //         }
    //         return true
    //     }
    //     return this.router.parseUrl('/404');
    // }

    constructor(private authService: AuthService, private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {

        console.log('loading');

        return this.authService.checkAuthentication().pipe(switchMap(r => {
            if (r.sf === Identity.SUB) {
                return of(this.router.parseUrl('/403'));
            }
            return of(!!r)
        }))
    }
    // canActivate(
    //     next: ActivatedRouteSnapshot,
    //     state: RouterStateSnapshot) {
    //     const url: string = state.url;
    //     console.log('loading');

    //     return new Observable<boolean>((observer) => {
    //         setTimeout(() => {
    //             console.log('done!');
    //             this.authService.isLoggedIn = true
    //             observer.next(true);
    //             observer.complete();
    //         }, 1000 * 3);
    //     });
    // }

}
