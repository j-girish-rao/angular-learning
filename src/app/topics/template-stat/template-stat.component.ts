import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-stat',
  templateUrl: './template-stat.component.html',
  styleUrls: ['./template-stat.component.scss']
})
export class TemplateStatComponent implements OnInit {

  constructor() { }
  showDiv : boolean = true;
  ngOnInit(): void {
  }

  toggleContent(event : any) : void {
    this.showDiv = !this.showDiv;
    console.log(event);
  }
}
