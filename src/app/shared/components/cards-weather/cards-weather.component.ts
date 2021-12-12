import { Component, OnInit } from '@angular/core';
import { WeatherService } from '@shared/services/weather.service';

@Component({
  selector: 'app-cards-weather',
  templateUrl: './cards-weather.component.html',
  styleUrls: ['./cards-weather.component.css'],
})
export class CardsWeatherComponent implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  getWeather(cityName: string) {
    this.weatherService.getData(cityName).subscribe(
      (res) => (console.log(res), (this.weather = res)),
      (err) => console.log(err)
    );
  }

  submitLocation(cityName: HTMLInputElement) {
    this.getWeather(cityName.value);

    cityName.value = '';
    cityName.focus();
    return false;
  }
}
