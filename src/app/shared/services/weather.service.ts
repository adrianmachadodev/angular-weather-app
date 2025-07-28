import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getData(cityName: string) {
    console.log(environment.api);
    return this.http.get(`${this.URL}${cityName}`);
  }

  getIconsWeather(icon:any):Observable<any>{
    return this.http.get("http://openweathermap.org/img/w/" + icon + ".png");
  }
}
