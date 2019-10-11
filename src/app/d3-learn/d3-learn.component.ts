import {Component, OnInit} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'd3-learn',
  templateUrl: './d3-learn.component.html',
  styleUrls: ['./d3-learn.component.scss']
})
export class D3LearnComponent implements OnInit {

  svgWidth = 600;
  svgHeight = 500;
  svg;

  constructor() {
  }

  ngOnInit() {
    this.svg = d3.select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)
      .attr('class', 'svg-container');

    this.svg.append('line')
      .attr('x1', 100)
      .attr('x2', 500)
      .attr('y1', 50)
      .attr('y2', 60)
      .attr('stroke', 'red')
      .attr('stroke-width', 10);

    this.svg.append('rect')
      .attr('x', 200)
      .attr('y', 140)
      .attr('width', 190)
      .attr('height', 90)
      .attr('fill', 'steelBlue');

    this.svg.append('circle')
      .attr('cx', 300)
      .attr('cy', 350)
      .attr('r', 100)
      .attr('fill', 'green');
  }

}
