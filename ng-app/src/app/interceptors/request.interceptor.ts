import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = localStorage.getItem('token') || 'tokenFromInterceptor'
        const url = ['/api', 'http'].some(s => request.url.startsWith(s)) ? request.url : environment.apiUrl + request.url
        const newRequest = request.clone({
            url,
            setHeaders: {
                token,
                'Content-Type': 'application/json',
                "X-Master-Key": environment.jsonMasterKey
            },
            setParams: {
                "ng": "1"
            }
        })
        return next.handle(newRequest);
    }
}
