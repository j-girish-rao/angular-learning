import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-routing',
  templateUrl: './angular-routing.component.html',
  styleUrls: ['./angular-routing.component.scss']
})
export class AngularRoutingComponent implements OnInit {

  Example1 : string = "<a routerLink='/some_path'>Redirect</a>";
  Example2 : string = "<router-outlet></router-outlet>";

  inputText : string = 'activated route';

  constructor() { }

  ngOnInit(): void {
  }
}
