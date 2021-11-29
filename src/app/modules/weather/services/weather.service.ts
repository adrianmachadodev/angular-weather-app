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

  private skipId(
    listWeather: WeatherModel[],
    id: number
  ): Promise<WeatherModel[]> {
    return new Promise((resolve, reject) => {
      const listWthr = listWeather.filter((a) => a.id !== id);
      resolve(listWthr);
    });
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}`).pipe(mergeMap({ data }:any)=>{
      return data
    });
  }
}
