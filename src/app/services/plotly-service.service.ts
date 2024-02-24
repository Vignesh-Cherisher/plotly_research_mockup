import { Injectable } from '@angular/core';
declare let Plotly: any;

@Injectable({
  providedIn: 'root'
})
export class PlotlyService {
constructor() { }
plotMultipleBar(plotDiv: string, data: object[], layout: object, options:object) {
  let trace = data

  Plotly.newPlot(plotDiv, trace, layout, options);
}

plotLine(title: string, plotDiv: string, x:number[], y:number[]){
    let trace = {
      x: x,
      y: y,
      type: 'scatter'
    };

    let layout = {
      title:title
    };

    Plotly.newPlot(plotDiv, [trace], layout);
  }
}
