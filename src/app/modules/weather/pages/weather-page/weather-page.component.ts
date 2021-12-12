import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-page',
  templateUrl: './weather-page.component.html',
  styleUrls: ['./weather-page.component.css'],
})
export class WeatherPageComponent implements OnInit {
  weather: any;

  constructor() {}

  ngOnInit(): void {}
}
