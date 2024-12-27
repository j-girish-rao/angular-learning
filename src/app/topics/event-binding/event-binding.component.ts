import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  eventBindSyntex = '<button (targetEvent)="templateStatement"></button>';
  alertBtnClass = 'class-a class-b';
  pointerOverEventData = 'Start';

  ngOnInit(): void {
  }

  showAlert(){
    alert('Click event');
  }

  alertMessage(event : any) {
    alert('Hi from Girish.');
    console.log(event);
  }

  pointerOverEvent(event : any){
    this.pointerOverEventData = 'Over';
  }

  pointerLeaveEvent(event : any){
    this.pointerOverEventData = 'Leave';
  }

}
