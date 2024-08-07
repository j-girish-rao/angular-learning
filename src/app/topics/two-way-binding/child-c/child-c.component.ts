import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-c',
  templateUrl: './child-c.component.html',
  styleUrls: ['./child-c.component.scss']
})
export class ChildCComponent implements OnInit {

  constructor() { }

  @Input() color : string = '';
  @Output() colorChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  changeColor(bgColor : string) {
    this.color = bgColor;
    this.colorChange.emit(bgColor);
  }
}
