import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  constructor() { }

  eventBindSyntex = '<button (targetEvent)="templateStatement"></button>';

  ngOnInit(): void {
  }

  showAlert(){
    alert('hi');
  }

}
