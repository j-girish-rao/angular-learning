import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent implements OnInit {

  constructor() { }
  applyCurrentStyle = {};

  ngIfSyntex : string = '<div *ngIf="isActive"></div>';
  isShowText : boolean = true;
  isHideText : boolean = false;

  ngForSyntex : string = '<div *ngFor="let item of items">{{item}}</div>';
  ngOtherForSyntex : string = '<div *ngFor="let item of items; let i = index">{{i}}.{{item}}</div> //index is the keyword here.';
  students = [
    {name : 'Ram'},
    {name : 'Krishna'},
    {name : 'Karan'}
  ]

  ngSwitchSyntex : string = 
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
