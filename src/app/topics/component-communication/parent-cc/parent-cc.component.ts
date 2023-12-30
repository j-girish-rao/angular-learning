import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildViewchildComponent } from '../child-viewchild/child-viewchild.component';

@Component({
  selector: 'app-parent-cc',
  templateUrl: './parent-cc.component.html',
  styleUrls: ['./parent-cc.component.scss']
})
export class ParentCcComponent implements AfterViewInit {

    binding : string = '';

    outputBindingDescription : string = 'In this use case we will be sending data from child to parent component. Here in this case we would be using @Output() decorator.';

    reference : string = '';
    provider : string = '';
    templateOutlet : string = '';

    topic1 : string = '';
    topic2 : string = '';
    topic3 : string = '';
    topic4 : string = '';

    @ViewChild(ChildViewchildComponent) childComp : any;

  constructor() { 

    this.binding = 'Binding (@Input and @Output)';
    this.reference  = 'Reference (@ViewChild and @ContentChild)';
    this.provider = 'Provider (Service)';
    this.templateOutlet = 'Template Outlet';
    
    this.topic1 = 'Binding - @Input';
    this.topic2 = 'Binding - @Output';
    this.topic3 = 'Reference -  @ViewChild';
    this.topic4 = 'Reference - @ContentChild';
    
  }

  ngAfterViewInit(): void {
  }

  getMessageFromChild() {
    alert(this.childComp.messageFromChildViewChild);
  }

  addNumberFromChild() {
    alert('Sum of 10 and 100 : ' + this.childComp.addNumbers(10,100));
  }

  receiveName(name : string){
    alert('Hi my name is ' + name + '!');
  }

  receiveHomePin(pincode : number){
    alert('And im from ' + pincode + '.');
  }

}
