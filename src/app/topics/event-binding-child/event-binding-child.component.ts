import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding-child',
  templateUrl: './event-binding-child.component.html',
  styles: [``]
})
export class EventBindingChildComponent implements OnInit {

  constructor() { }

  @Output() deleteEmitter = new EventEmitter<string>;

  ngOnInit(): void {
  }

  deleteItem() { 
    console.log('Delete called.');
    this.deleteEmitter.emit('Delete called.');
  }

}
