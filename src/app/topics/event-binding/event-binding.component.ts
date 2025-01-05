import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styles: [`.sub-heading-topics {
      font-size: 15px;
      color: violet;
      font-style: italic;
      font-weight: 500;
    }`]
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  eventBindSyntex = '<button (targetEvent)="templateStatement"></button>';
  alertBtnClass = 'class-a class-b';
  pointerOverEventData = 'Start';
  customEventEmitterSyntex : string = '<app-event-binding-child (deleteEmitter)="catchDeleteChildItem($event)"></app-event-binding-child>';

  ngOnInit(): void {
  }

  showAlert() {
    alert('Click event');
  }

  alertMessage(event : any) {
    alert('Hi from Girish.');
    console.log(event);
  }

  pointerOverEvent(event : any) {
    this.pointerOverEventData = 'PointerOverEvent() called.';
  }

  pointerLeaveEvent(event : any) {
    this.pointerOverEventData = 'PointerLeaveEvent() called.';
  }

  deleteChildItem(item : any) {
    alert('Deleted item in child : ' + item);
  }

}
