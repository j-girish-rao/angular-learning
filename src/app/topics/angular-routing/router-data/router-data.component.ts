import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-data',
  templateUrl: './router-data.component.html',
  styleUrls: ['./router-data.component.scss']
})
export class RouterDataComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }

  dataFromComponent : any = '';

  ngOnInit(): void {
    this.dataFromComponent = this.activatedRoute.snapshot.paramMap.get('data');
  }

}
