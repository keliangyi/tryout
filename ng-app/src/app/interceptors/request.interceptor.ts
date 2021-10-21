import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = localStorage.getItem('token') || 'tokenFromInterceptor'
        const newRequest = request.clone({
            setHeaders: {
                token,
                'Content-Type': 'application/json'
            },
            setParams: {
                "ng": "1"
            }
        })
        return next.handle(newRequest);
    }
}
