import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss']
})
export class TemplateFormComponent implements OnInit {

  availableAges = [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
  availableGender = ['-Select-','Male','Female'];
  employee = new Employee(7,'Raul','Bengaluru, India', 32, 'Male');
  ceoEmployee = new Employee(7,'Kaka','Bengaluru, India', 31, 'Male');
  submitted : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onEmployeeFormSubmit() : void {
    this.submitted = true;
  }

  ceoFormSubmit() : void {

  }

  backToForm() : void {
    this.submitted = false;
  }

}
