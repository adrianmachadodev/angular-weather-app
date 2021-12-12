import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WeatherModel } from '@core/models/weather.model';
import { Observable } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  getData(cityName: string) {
    return this.http.get(`${this.URL}${cityName}`);
  }
}
