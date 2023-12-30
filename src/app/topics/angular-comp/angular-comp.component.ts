import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-comp',
  templateUrl: './angular-comp.component.html',
  styleUrls: ['./angular-comp.component.scss']
})
export class AngularCompComponent {

  componentDecorator : string = '';
  constructor() { 
    this.componentDecorator = "@Component({ selector : 'app-hello-world', templateUrl: './app-hello-world.html', styleUrls : './app-hello-world.scss'})";
  }

}
