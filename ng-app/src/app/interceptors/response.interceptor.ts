import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, of, } from 'rxjs';
import { tap, timeout, catchError } from 'rxjs/operators'
import { MatSnackBar } from '@angular/material/snack-bar';

const TIMEOUT = 10000

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor(private toast: MatSnackBar) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler,): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(
            timeout(TIMEOUT),
            tap((res: HttpEvent<any>) => {
                if (res instanceof HttpResponse) {
                    if (res.status >= 200 && res.status < 300) {
                        console.log('请求成功！');
                    } else if (res.status === 403) {
                        this.toast.open('没有权限', '', {
                            verticalPosition: 'top'
                        })
                    } else {
                        throw new Error('服务器出错啦')
                    }
                }
            }),
            catchError((err: any) => {
                console.log(err);
                let msg: string = ''
                if (err instanceof HttpErrorResponse) {
                    msg = err.statusText
                }
                this.toast.open(msg, '', {
                    verticalPosition: 'top',
                    duration: 2000
                })
                return of(err)
            })
        );
    }
}
