import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child-cc',
  templateUrl: './child-cc.component.html',
  styleUrls: ['./child-cc.component.scss']
})
export class ChildCcComponent {

  labelMessage : string = '';
  @Input() childMessage : string = '';
  @Input() parentStringMessage : string = '';
  inputDescription : string = '';

  @Output() messageEvent = new EventEmitter<string>();

  constructor() { 
    this.labelMessage = 'Following is the message that is been passed from parent commponent:'
    this.inputDescription = 'Data from parent can be sent to child component using @Input() decorator. Here in child component variable with @Input() is declared and from parent the value is passed. In parent component child css selector is included and parameter is initialized with the value. <app-child [childMessage]="Hi from parent."></app-child>';
  }

  sendMessage() {
    this.messageEvent.emit('This is the message from child.');
  }
}
