import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavComponent } from './components/header-nav/header-nav.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { CardsWeatherComponent } from './components/cards-weather/cards-weather.component';
import { CardMainComponent } from './components/card-main/card-main.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderNavComponent,
    SectionGenericComponent,
    CardsWeatherComponent,
    CardMainComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    HeaderNavComponent,
    SectionGenericComponent,
    CardsWeatherComponent,
    CardMainComponent,
  ],
})
export class SharedModule {}
