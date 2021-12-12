import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherPageComponent } from './pages/weather-page/weather-page.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [WeatherPageComponent],
  imports: [CommonModule, WeatherRoutingModule, SharedModule],
})
export class WeatherModule {}
