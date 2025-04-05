import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../template-form/employee.model';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss'],
})
export class ReactiveFormComponent implements OnInit {
  constructor() {}

  availableAges = [23,24,25,26,27,28,29,30,31,32,33,34,35,36,37];
  availableGender = ['-Select-','Male','Female'];
  accessNameHtml: string = '{{name.value}}';
  accessNameComponent: string = "this.name.setValue('Raul');";
  name = new FormControl('');
  employee = new Employee(7,'Kaka','Bengaluru, India', 31, 'Male');

  employeeForm : any;

  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      id : new FormControl(this.employee.id),
      name : new FormControl(this.employee.name,[
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(15)
      ]),
      address : new FormControl(this.employee.address),
      age : new FormControl(this.employee.age),
      gender : new FormControl(this.employee.gender)
    });

  }

  updateNameValue(): void {
    this.name.setValue('Raul');
  }

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
  });
  formGroupValue: string = '';

  
  empFormValue: string = '';

  formGroupSubmit(): void {
    this.formGroupValue = JSON.stringify(this.profileForm.value);
  }
  employeeFormSubmit(): void {
    this.empFormValue = JSON.stringify(this.employeeForm.value);
  }
}
