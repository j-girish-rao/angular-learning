import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-component-styling',
  templateUrl: './component-styling.component.html',
  styleUrls: ['./component-styling.component.scss'],
})
export class ComponentStylingComponent implements OnInit {

  strStyle : string = '';
  strStyleUrls : string = '';
  styleTagInHtml : string = '';


  constructor() { }

  ngOnInit(): void {
    this.strStyle = "styles: [`.color-red { color: red; }`]";
    this.strStyleUrls = "styleUrls: ['./component-styling.component.scss']";
    this.styleTagInHtml = "<style> .bg-color { background: #fafafa } <style>"
  }

}
