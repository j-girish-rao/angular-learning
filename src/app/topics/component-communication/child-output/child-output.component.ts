import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrls: ['./child-output.component.scss']
})
export class ChildOutputComponent implements OnInit {

  @Output() sendName = new EventEmitter<string>();
  @Output() sendHomePin = new EventEmitter<number>();

  descriptionChild : string = '';

  constructor() { 
    this.descriptionChild = 'In clild component @Output() decorator is imported and a variable is declared of type @Output() decorator (@Output() sendMessage = new EventEmitter<string>();). This variable is initialized with EventEmitter which basically emits event enent to parent (this.sendMessage.emit("Girish J");).';
    this.descriptionChild += 'In parent component the child css selector is imported <app-child-output (sendMessage)="receiveMessage($event)"></app-child-output>. Here sendMessage emits the message from child component and that event is received by parent component at receiveMessage().';
  }

  ngOnInit(): void {
  }

  sendStringMessage() {
    this.sendName.emit('Girish J');
  }

  sendNumberMessage() {
    this.sendHomePin.emit(583201);
  }

}
