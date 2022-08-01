import { Component, Input, OnInit } from '@angular/core';
import { GraphValue } from '../graphValue';

@Component({
  selector: 'app-weather-footer-container',
  templateUrl: './weather-footer-container.component.html',
  styleUrls: ['./weather-footer-container.component.css'],
})
export class WeatherFooterContainerComponent implements OnInit {
  @Input() graphValues: GraphValue[] = [];

  colorScheme: any = {
    domain: ['#704FC$', '#4B852C', '#B67A3D', '#5B6FC8', '#25706F', '#25706F'],
  };
  legend: boolean = false;
  showXAxisLabel: boolean = false;
  showYAxisLabel: boolean = false;
  xAxis: boolean = true;
  yAxis: boolean = false;
  xAxisLabel: string = 'Products';
  yAxisLabel: string = 'Sales';

  constructor() {}

  ngOnInit(): void {}
}
