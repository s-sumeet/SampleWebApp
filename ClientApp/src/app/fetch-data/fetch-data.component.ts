import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../medical/Medicine';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: Medicine[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Medicine[]>(baseUrl + 'api/Medicines').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}


