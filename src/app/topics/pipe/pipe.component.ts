import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  beforeFormatDate : Date = new Date();
  weight_stu1 : number = 120.1234
  weight_stu2 : number = 81.74583

  constructor() { }

  ngOnInit(): void {
  }

}
