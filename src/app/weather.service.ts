import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GraphValue } from './weather/graphValue';
import { Weather } from './weather/weather';
import * as echarts from 'echarts';

type EChartsOption = echarts.EChartsOption;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  hamburgerValuesOpened = new Subject<boolean>();

  graphValues: GraphValue[] = [
    {
      name: 'NOW',
      value: 30,
    },
    {
      name: '7AM',
      value: 20,
    },
    {
      name: '8AM',
      value: 25,
    },
    {
      name: '9AM',
      value: 23,
    },
    {
      name: '10AM',
      value: 32,
    },
    {
      name: '11AM',
      value: 30,
    },
  ];

  weathers: Weather[] = [
    {
      city: 'Jerusalem',
      temperature: 30,
      maxTemperature: 32,
      minTemperature: 21,
      weatherPhenomena: 'Sunny',
      weatherPicture: 'fas fa-sun',
    },
    {
      city: 'New-York',
      temperature: 22,
      maxTemperature: 25,
      minTemperature: 18,
      weatherPhenomena: 'Rainy',
      weatherPicture: 'fas fa-cloud-rain',
    },
    {
      city: 'Paris',
      temperature: 18,
      maxTemperature: 20,
      minTemperature: 15,
      weatherPhenomena: 'Rainy',
      weatherPicture: 'fas fa-cloud-rain',
    },
    {
      city: 'London',
      temperature: 19,
      maxTemperature: 20,
      minTemperature: 17,
      weatherPhenomena: 'Fog',
      weatherPicture: 'fas fa-smog',
    },
  ];

  chartOption: EChartsOption = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
      },
    ],
  };

  constructor() {
    // type EChartsOption = echarts.EChartsOption;
    // var chartDom = document.getElementById('myChart')!;
    // var myChart = echarts.init(chartDom);
    // var option: EChartsOption;
    // option = {
    //   xAxis: {
    //     type: 'category',
    //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    //   },
    //   yAxis: {
    //     type: 'value',
    //   },
    //   series: [
    //     {
    //       data: [820, 932, 901, 934, 1290, 1330, 1320],
    //       type: 'line',
    //       smooth: true,
    //     },
    //   ],
    // };
    // option && myChart.setOption(option);
  }
}
