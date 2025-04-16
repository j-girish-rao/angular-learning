import { HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TestInterceptor implements HttpInterceptor {

    intercept(req, next) {
        const authRequest = req.clone({
            headers : req.headers.Set('Authorization','')
        });

        return next.handle(authRequest);
    }
}