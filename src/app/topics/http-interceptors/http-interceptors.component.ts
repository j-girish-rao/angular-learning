import { Component } from '@angular/core';

@Component({
  selector: 'app-http-interceptors',
  templateUrl: './http-interceptors.component.html',
  styleUrls: ['./http-interceptors.component.scss']
})
export class HttpInterceptorsComponent {

  handlerSyntax : string = '{provier: HTTP_INTERCEPTORS, useClass:TestInterceptor, multi: true }';
}
