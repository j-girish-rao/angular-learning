import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  availableAges = [18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
  availableGender = ['Male','Female'];
  mod = new Employee(7,'Girish J','008 Icon Luxuria',31,'Male');
  submited : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submited = true;
  }

}
