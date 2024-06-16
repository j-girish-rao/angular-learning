import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-parent',
  templateUrl: './ng-content-parent.component.html',
  styleUrls: ['./ng-content-parent.component.scss']
})
export class NgContentParentComponent implements OnInit {

  ngContent1 : string = '';
  ngContent2 : string = '';
  ngContent3 : string = '';

  constructor() {
    this.ngContent1 = '<ng-content [question]></ng-content>';
    this.ngContent2 = '<ng-content [answer]></ng-content>';
    this.ngContent3 = '<h3>What is capital of India ?</h3><p>New Delhi</p>';
   }

  ngOnInit(): void {
  }

}
