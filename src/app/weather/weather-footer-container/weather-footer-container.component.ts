import { Component, Input, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-weather-footer-container',
  templateUrl: './weather-footer-container.component.html',
  styleUrls: ['./weather-footer-container.component.css'],
})
export class WeatherFooterContainerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
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
  }
}
