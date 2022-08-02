import { Component, Input, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather/weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-weather-header-container',
  templateUrl: './weather-header-container.component.html',
  styleUrls: ['./weather-header-container.component.css'],
})
export class WeatherHeaderContainerComponent implements OnInit {
  toShowCities = false;
  @Input() clickedCityWeather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  showCities() {
    this.weatherService.hamburgerValuesOpened.next(true);
  }
}
