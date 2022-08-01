import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-body-container',
  templateUrl: './weather-body-container.component.html',
  styleUrls: ['./weather-body-container.component.css'],
})
export class WeatherBodyContainerComponent implements OnInit {
  @Input() clickedCityWeather;

  constructor() {}

  ngOnInit(): void {}
}
