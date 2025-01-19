import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  templateUrl: './attribute-directive.component.html',
  styleUrls: ['./attribute-directive.component.scss']
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngClassSyntex : string = `<div [ngClass] = "applyIsSpecialClass ? 'specialClass' : '' "></div>`;
  applyIsSpecialClass : boolean = true;

  ngStyleSyntex : string = `<div [ngStyle] = "styleThisDiv" ></div>. Where is an json object styleThisDiv { 'color' : 'red', 'font-size' : '14px' }`;
  ngModelSyntex : string = `<input type="textbox" id="txtName" [(ngModel)]="fullName" />`;

  applyCssClasses = {};
  applyCurrentStyle = {};

  fullName : string = "560077";

  ngOnInit(): void {
    this.setCssClasses();
    this.setElementStyle();
  }

  setCssClasses(): void {
    this.applyCssClasses = {
      isBorder : true,
      isColor : true,
      isBgColor : false
    };
  }

  setElementStyle() : void {
    this.applyCurrentStyle = {
      'background-color': 'crimson',
      'color': 'yellow',
      'font-size': '15px'
    }
  }


}
