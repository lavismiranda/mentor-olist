import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import * as sellers from './data/sellers.json'
import * as mentor from './data/mentor.json'
import * as mentor2 from './data/mentor_2.json'
import * as mentors from './data/mentors.json'
import * as seller from './data/seller.json'

const urls = [
    {
        url: 'http://localhost:4200/api/sellers',
        json: sellers
    },
     {
        url: 'http://localhost:4200/api/mentors',
        json: mentors
    },
     {
        url: 'http://localhost:4200/api/mentor',
        json: mentor
    },
    {
        url: 'http://localhost:4200/api/seller',
        json: seller
    },
    {
        url: 'http://localhost:4200/api/2/mentor',
        json: mentor2
    }
];

@Injectable()
export class HttpMockRequestInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {        
        for (const element of urls) {
            if (request.url === element.url) {
                console.log('Loaded from json : ' + request.url);
                return of(new HttpResponse({ status: 200, body: ((element.json) as any).default }));
            }
        }
        console.log('Loaded from http call :' + request.url);
        return next.handle(request);
    }
}