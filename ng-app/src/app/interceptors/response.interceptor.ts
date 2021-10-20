import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse
} from '@angular/common/http';
import { Observable, } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return next.handle(request).pipe(tap((res: HttpEvent<any>) => {
            if (res instanceof HttpResponse) {
                if (res.status >= 200 && res.status < 300) {
                    console.log('请求成功！');

                }
            }
        }));
    }
}
