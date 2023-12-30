import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-cc',
  templateUrl: './parent-cc.component.html',
  styleUrls: ['./parent-cc.component.scss']
})
export class ParentCcComponent implements OnInit {

    binding : string = '';
    reference : string = '';
    provider : string = '';
    templateOutlet : string = '';

    topic1 : string = '';
    topic2 : string = '';
    topic3 : string = '';
    topic4 : string = '';

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

  ngOnInit(): void {
  }

}
