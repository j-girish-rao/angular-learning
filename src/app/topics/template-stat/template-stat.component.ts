import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-stat',
  templateUrl: './template-stat.component.html',
  styleUrls: ['./template-stat.component.scss']
})
export class TemplateStatComponent implements OnInit {

  constructor() { }
  showDiv : boolean = true;
  hoverData : string = 'MouseLeave';
  ngOnInit(): void {
  }

  toggleContent(event : any) : void {
    this.showDiv = !this.showDiv;
    console.log(event);
  }

  toggleMouseOver(event : any) :void {
    this.hoverData = 'MouseOver';
  }

  toggleMouseLeave(event : any) :void {
    this.hoverData = 'MouseLeave';
  }
}
