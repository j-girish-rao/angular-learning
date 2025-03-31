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
  userName : string = 'Raul';

  pipeSyntax : string = "@Pipe({ name: 'name-of-the-pipe' }) <br/> export class WeightPipePipe implements PipeTransform { <br/>transform()<br/> }";

  constructor() { }

  ngOnInit(): void {
  }

}
