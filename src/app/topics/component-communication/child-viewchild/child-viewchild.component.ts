import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-viewchild',
  templateUrl: './child-viewchild.component.html',
  styleUrls: ['./child-viewchild.component.scss']
})
export class ChildViewchildComponent implements OnInit {

  messageFromChildViewChild : string = 'This is a string message from child component using view child technique.';

  constructor() { }

  ngOnInit(): void {
  }

  addNumbers(a : number, b:number) : number {
    return a + b;
  }
}
