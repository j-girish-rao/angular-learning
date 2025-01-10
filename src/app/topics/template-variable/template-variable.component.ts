import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.scss']
})
export class TemplateVariableComponent implements OnInit {

  constructor() { }

  templateVariableExample : string = '<input type="text" #phone />';

  ngOnInit(): void {
  }

  callPhone(phoneNumber : string){
    console.log('Phone number : ' + phoneNumber);
    alert('Phone number : ' + phoneNumber);
  }

  sendMail (email : string) {
    console.log('Email : ' + email);
    alert('Email : ' + email);
  }

}
