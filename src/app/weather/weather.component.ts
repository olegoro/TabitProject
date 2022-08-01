import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { GraphValue } from './graphValue';
import { Weather } from './weather';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  graphValues: GraphValue[] = [];
  weathers: Weather[] = [];
  // toShowCities = false;
  clickedCityWeather: Weather;

  // colorScheme: any = {
  //   domain: ['#704FC$', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F', '#25706F'],
  // };
  // legend: boolean = false;
  // showXAxisLabel: boolean = false;
  // showYAxisLabel: boolean = false;
  // xAxis: boolean = true;
  // yAxis: boolean = false;
  // xAxisLabel: string = 'Products';
  // yAxisLabel: string = 'Sales';

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.graphValues = this.weatherService.graphValues;
    this.weathers = this.weatherService.weathers;
    this.clickedCityWeather = this.weathers[0];
  }

  onCityClicked(event) {
    this.clickedCityWeather = event;
  }
}
