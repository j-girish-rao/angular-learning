import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.scss']
})
export class PropertyBindingComponent implements OnInit {

  constructor() { }

  isUnchanged = true;
  disabledText = "{{isUnchanged}}";
  AttributeBindingExample1 = '<p [attr.attribute-you-are-targeting]="expression"></p>';
  AttributeBindingExample2 = '<tr><td [colSpan]="1+1">one-two<td></tr>';

  ClassBindingExample1 = '<div [class.sale]="onSale"></div>';
  ClassBindingExample2 = '<div [class]="classOne classTwo"></div>';
  ClassBindingExample3 = '<div [class]="{classOne : true, classTwo : false}"></div>';
  onSale = true;
  onSaleFalse = false;

  StyleBindingExample1 = '<div [style.background-color]="expression"></div>';
  StyleBindingExample2 = '<div [style.backgroundColor]="expression"></div>';
  StyleBindingExample3 = '<div [style]="width : 100px; height : 50px; background : red;"></div>';
  StyleBindingExample4 = '<div [class]="{width : 100px, height : 50px}"></div>';

  backgroundColour = '{classOne : true, classTwo : false}';

  ngOnInit(): void {
  }

}
