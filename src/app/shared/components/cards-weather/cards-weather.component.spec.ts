import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsWeatherComponent } from './cards-weather.component';

describe('CardsWeatherComponent', () => {
  let component: CardsWeatherComponent;
  let fixture: ComponentFixture<CardsWeatherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsWeatherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
