import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Weather } from './weather';
import * as echarts from 'echarts';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  hamburgerValuesOpened = new Subject<boolean>();

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

  constructor() {}

  createChart() {
    type EChartsOption = echarts.EChartsOption;

    var chartDom = document.getElementById('myChart')!;
    var myChart = echarts.init(chartDom);
    var option: EChartsOption;

    option = {
      tooltip: {
        trigger: 'axis',
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['NOW', '7am', '8am', '9am', '10am', '11am'],
        axisLine: {
          lineStyle: {
            color: 'white',
          },
        },
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          name: 'Temperature',
          type: 'line',
          stack: 'Total',
          data: [18, 18, 19, 21, 19, 18],
          lineStyle: { type: 'dashed', width: 1, color: 'white' },
          itemStyle: {
            color: 'white',
          },
          label: {
            show: true,
            color: 'white',
          },
        },
      ],
    };

    option && myChart.setOption(option);

    window.onresize = function () {
      myChart.resize();
    };
  }
}
