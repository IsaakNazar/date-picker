import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss']
})
export class DoughnutChartComponent implements OnInit {

  // dataset = [29, 27, 53, 183, 98, 101, 15, 56, 45];  Bar chart
  // dataset = [1, 2, 3, 4, 5];  Scale Linear
  dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
  svgWidth = 500;
  svgHeight = 300;
  barPad = 5;
  barWidth = (this.svgWidth / this.dataset.length);
  svg;
  // yScale;
  barChart;

  constructor() {
  }

  ngOnInit() {

    this.svg = d3.select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);

    //  SCALE LINEAR BAR

    // this.yScale = d3.scaleLinear()
    //   .domain([0, d3.max(this.dataset)])
    //   .range([0, this.svgHeight]);
    //
    // this.barChart = this.svg.selectAll('rect')
    //   .data(this.dataset)
    //   .enter()
    //   .append('rect')
    //   .attr('y', d => this.svgHeight - this.yScale(d))
    //   .attr('height', d => this.yScale(d))
    //   .attr('width', this.barWidth - this.barPad)
    //   .attr('transform', (d, i) => 'translate(' + (this.barWidth * i) + ')');


    //  SIMPLE BAR CHART

    // this.svg.selectAll('rect')
    //   .data(this.dataset)
    //   .enter()
    //   .append('rect')
    //   .attr('y', d => this.svgHeight - d)
    //   .attr('height', d => d)
    //   .attr('width', this.barWidth - this.barPad)
    //   .attr('transform', (d, i) => `translate(${this.barWidth * i})`)
    //   .attr('fill', d => `rgb(${3 * d},${3 * d},${2 * d})`);
    //
    // this.svg.selectAll('text')
    //   .data(this.dataset)
    //   .enter().append('text')
    //   .text(d => d)
    //   .attr('y', d => this.svgHeight - d - 2)
    //   .attr('x', (d, i) => (this.barWidth * i) + (this.barWidth / 4))
    //   .attr('fill', '#A64C38');


    //  AXES

    let xScale = d3.scaleLinear()
      .domain([0, d3.max(this.dataset)])
      .range([0, this.svgWidth]);

    let yScale = d3.scaleLinear()
      .domain([0, d3.max(this.dataset)])
      .range([this.svgHeight, 0]);

    let x_axis = d3.axisBottom()
      .scale(xScale);

    let y_axis = d3.axisLeft().scale(yScale);

    this.svg.append('g')
      .attr('transform', 'translate(50, 10)')
      .call(y_axis);

    let xAxisTranslate = this.svgHeight - 20;

    this.svg.append('g')
      .attr('transform', 'translate(50, ' + xAxisTranslate + ')')
      .call(x_axis);
  }

}
