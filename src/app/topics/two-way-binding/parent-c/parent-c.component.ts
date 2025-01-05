import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.scss']
})
export class ParentCComponent implements OnInit {

  constructor() { }

  fontSize : number = 16;
  backgroundColor : string = 'red';
  bindingSyntex1 : string = '<app-child [color]=backgroundColor" (colorChange)="backgroundColor"></app-child>';
  bindingSyntex2 : string = '<app-child [(color)]="backgroundColor"></app-child>';
  displayWidthParent : string = '290px';
  syatexExample : string = "<ap-child-comp [(shareData)]='receivedData'></ap-child-comp>.";

  ngOnInit(): void {
  }

  inc() {
    this.fontSize = ++this.fontSize;
  }

  dec() {
    this.fontSize = --this.fontSize;
  }

}
