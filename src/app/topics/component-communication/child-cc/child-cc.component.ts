import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-cc',
  templateUrl: './child-cc.component.html',
  styleUrls: ['./child-cc.component.scss']
})
export class ChildCcComponent {

  labelMessage : string = '';
  @Input() childMessage : string = '';

  constructor() { 
    this.labelMessage = 'Following is the message that is been passed from parent commponent.'
  }

}
