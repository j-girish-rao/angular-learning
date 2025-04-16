import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { DrinksResponse } from './drinksresponse';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.scss']
})
export class HttpClientComponent implements OnInit  {

  drinksData : DrinksResponse = new DrinksResponse();
  constructor(private dataService : DataService){
  }

  ngOnInit() {
    this.dataService.getData('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').subscribe((res) => {
      console.log(res);
      this.drinksData = res as DrinksResponse;
    });
  }

}
