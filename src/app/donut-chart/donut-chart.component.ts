import {Component, OnInit} from '@angular/core';
import {ChartType} from 'chart.js';
import * as d3 from 'd3';

// import Chart from 'chart.js';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {
  data = [
    {platform: 'Android', percentage: 40.11},
    {platform: 'Windows', percentage: 36.69},
    {platform: 'Linux', percentage: 46.69},
    {platform: 'iOS', percentage: 13.06}
  ];

  svgWidth = 500;
  svgHeight = 300;
  radius = Math.min(this.svgWidth, this.svgHeight) / 2;

  constructor() {
  }

  ngOnInit() {

    const svg = d3.select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight);

// Create group element to hold pie chart
    const g = svg.append('g')
      .attr('transform', 'translate(' + this.radius + ',' + this.radius + ')');

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const pie = d3.pie().value(d => d.percentage);

    const path = d3.arc()
      .outerRadius(this.radius)
      .innerRadius(this.radius - 60)
      .padRadius(400);


    const arc = g.selectAll('arc')
      .data(pie(this.data))
      .enter()
      .append('g');

    arc.append('path')
      .attr('d', path)
      .attr('fill', d => color(d.data.percentage));

  }

}
