import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }
  applyCurrentStyle = {};

  ngIfSyntax : string = '<div *ngIf="isActive"></div>';
  isShowText : boolean = true;
  isHideText : boolean = false;

  ngForSyntax : string = '<div *ngFor="let item of items">{{item}}</div>';
  ngOtherForSyntax : string = '<div *ngFor="let item of items; let i = index">{{i}}.{{item}}</div> //index is the keyword here.';
  students = [
    {name : 'Ram'},
    {name : 'Krishna'},
    {name : 'Karan'}
  ]

  ngSwitchSyntax : string = 
  `<div [ngSwitch]="item.Fruits">
    <div *ngSwitchCase="'AA'">AA</div>
    <div *ngSwitchCase="'BB'">BB</div>
    <div *ngSwitchDefault>Default</div>
  </div>`;

  defineType = [
    {name : 'Apple'},
    {name : 'Potato'},
    {name : 'Orange'},
    {name : 'Onion'},
    {name : 'Zebra'}
  ]


  ngOnInit(): void {
    this.setElementStyle();
  }

  setElementStyle() : void {
    this.applyCurrentStyle = {
      'background-color': 'crimson',
      'color': 'yellow',
      'font-size': '15px'
    }
  }

}
