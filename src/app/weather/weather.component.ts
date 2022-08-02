import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  weathers: Weather[] = [];
  clickedCityWeather: Weather;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weathers = this.weatherService.weathers;
    this.clickedCityWeather = this.weathers[0];
  }

  onCityClicked(event) {
    this.clickedCityWeather = event;
  }
}
