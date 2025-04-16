import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-angular-animations',
  templateUrl: './angular-animations.component.html',
  styleUrls: ['./angular-animations.component.scss'],
  animations : [
    trigger('openClose',[
      state('open',style({
        width: '100px',
        height: '200px',
        backgroundColor: 'yellow',
        opacity: 1,
        color: 'black'
      })),
      state('closed', style({
        width: '100px',
        height: '50px',
        backgroundColor: 'blue',
        opacity: 0.8,
        color: 'white'
      })),
      transition('open => closed', [animate('1s ease-out')]),
      transition('closed => open', [animate('3s ease-in')])
    ])
  ]
})
export class AngularAnimationsComponent {
  isOpen : boolean = true;

  toggleBool() {
    this.isOpen = !this.isOpen;
  }
}
