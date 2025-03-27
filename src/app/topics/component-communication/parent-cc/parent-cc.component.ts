import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { ChildViewchildComponent } from '../child-viewchild/child-viewchild.component';
import { Person } from '../../model/Person';

@Component({
  selector: 'app-parent-cc',
  templateUrl: './parent-cc.component.html',
  styleUrls: ['./parent-cc.component.scss']
})
export class ParentCcComponent implements AfterViewInit {

    outputBindingDescription : string = 'In this use case we will be sending data from child to parent component. Here in this case we would be using @Output() decorator.';

    readonly binding : string = 'Binding (@Input and @Output)';
    readonly reference : string = 'Reference (@ViewChild and @ContentChild)';
    readonly provider : string = 'Provider (Service)';
    readonly templateOutlet : string = 'Template Outlet';

    topic1 : string ;
    topic2 : string ;
    topic3 : string ;
    topic4 : string ;
    topic5 : string ;

    @ViewChild(ChildViewchildComponent) viewChildExample : any;

  constructor() { 
    // Initialization in constructor.
    this.topic1 = 'Binding - @Input (Parent to Child)';
    this.topic2 = 'Binding - @Output (Child to Parent)';
    this.topic3 = 'Reference -  @ViewChild';
    this.topic4 = 'Reference - @ContentChild';
    this.topic5 = 'Template Outlet';
  }

  ngAfterViewInit(): void {
  }

  getMessageFromChild() {
    alert(this.viewChildExample.messageFromChildViewChild);
  }

  addNumberFromChild() {
    let sum = this.viewChildExample.addNumbers(10,100);
    alert('Sum of 10 and 100 : ' + sum);
  }

  receiveName(name : string) {
    alert('Hi my name is ' + name + '!');
  }

  receiveHomePin(pincode : number) {
    alert('And im from ' + pincode + '.');
  }

  receivePerson(details : Person) {
    alert(details.toDetails());
  }
}
