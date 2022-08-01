import {
  Component,
  OnInit,
  EventEmitter,
  OnDestroy,
  Output,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from 'src/app/weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather-cities-container',
  templateUrl: './weather-cities-container.component.html',
  styleUrls: ['./weather-cities-container.component.css'],
})
export class WeatherCitiesContainerComponent implements OnInit, OnDestroy {
  toShowCities = false;
  weathers: Weather[] = [];
  clickedCityWeather: Weather;
  subscription: Subscription;

  @Output() cityClicked = new EventEmitter<Weather>();

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.subscription = this.weatherService.hamburgerValuesOpened.subscribe(
      (toShowCities) => {
        this.toShowCities = toShowCities;
      }
    );

    this.weathers = this.weatherService.weathers;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  showCityWeather(index: number) {
    this.clickedCityWeather = this.weathers[index];
    this.cityClicked.emit(this.clickedCityWeather);
  }
}
