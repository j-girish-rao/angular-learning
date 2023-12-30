import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-text-interpolation',
  templateUrl: './text-interpolation.component.html',
  styleUrls: ['./text-interpolation.component.scss']
})
export class TextInterpolationComponent implements OnInit, OnDestroy {

  templateExpression : string = '';
  title : string = '';

  example_1 : string = '';
  example_2 : string = '';
  example_3 : string = '';
  example_4 : string = '';

  constructor() { 

    this.templateExpression = 'Template Expression : This is declared using double curly braces {{ variable_name_from_typescript }}. Its also called mustach systex.'
    this.title = 'Hi from typescript.'

    this.example_1 = '{{title}}';
    this.example_2 = '{{1+10}}';
    this.example_3 = '{{"Girish" + " J"}}';
    this.example_4 = 'sumOfNumbers(11,100)';

  }

  sumOfNumbers(a : number, b : number) {
    return a+b;
  }

  ngOnInit(): void {
      
  }

  ngOnDestroy(): void {
      
  }
}
