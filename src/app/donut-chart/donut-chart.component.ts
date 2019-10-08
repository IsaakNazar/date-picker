import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

// import Chart from 'chart.js';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  public doughnutChartData = [];
  public bg = ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9'];

  constructor() {
  }

  ngOnInit() {

    this.doughnutChartData = [{
      data: [350, 450, 100, 125],
      backgroundColor: this.bg
    }];
  }

  // public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }
  //
  // public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  //   console.log(event, active);
  // }

}
