import { Component, OnInit } from '@angular/core';
import { PlotlyService } from '../services/plotly-service.service';

@Component({
  selector: 'app-plotly-component',
  templateUrl: './plotly-component.component.html',
  styleUrl: './plotly-component.component.css'
})
export class PlotlyComponentComponent implements OnInit {
  constructor(private plotlyService: PlotlyService) { }

  ngOnInit(): void {
    var trace1 = {
      x:['Zebras', 'Lions', 'Pelicans'],
      y: [90, 'Crazy', 60],
      type: 'bar',
      name: 'New York Zoo'
  };

  var trace2 = {
      x:['Zebras', 'Lions', 'Pelicans'],
      y: [10, 80, 45],
      type: 'bar',
      name: 'San Francisco Zoo'
  };

  var data = [trace1, trace2];

  var layout = {
      title: 'Hide the Modebar',
      showlegend: true
  };

  this.plotlyService.plotMultipleBar('plot', data, layout, {displayModeBar: false});
  }
}