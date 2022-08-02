import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { WeatherService } from 'src/app/weather/weather.service';

@Component({
  selector: 'app-weather-footer-container',
  templateUrl: './weather-footer-container.component.html',
  styleUrls: ['./weather-footer-container.component.css'],
})
export class WeatherFooterContainerComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.createChart();
  }
}
