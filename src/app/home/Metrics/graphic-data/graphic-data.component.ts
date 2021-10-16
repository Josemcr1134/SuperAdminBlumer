import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
@Component({
  selector: 'app-graphic-data',
  templateUrl: './graphic-data.component.html',
  styles: [
  ]
})
export class GraphicDataComponent implements OnInit {
  // MONTH GROW
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 66, 27, 40], label: 'Crecimiento Mensual' }
  ];

  // RETENTION CUP APP USERS
  public barRetentionCupChartOptions: ChartOptions = {
    responsive: true,
  };
  public barRetentionCupChartLabels: Label[] = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado','Domingo'];
  public barRetentionCupChartType: ChartType = 'bar';
  public barRetentionCupChartLegend = true;
  public barRetentionCupChartPlugins = [];

  public barRetentionCupChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 66, 27, 40], label: 'Taza de retención' }
  ];




  // PEAK HOURS
  public barPeakHoursChartOptions: ChartOptions = {
    responsive: true,
  };
  public barPeakHoursChartLabels: Label[] = ['0h', '3h', '6h', '9h', '12h', '15h', '18h', '21h', '24h'];
  public barPeakHoursChartType: ChartType = 'bar';
  public barPeakHoursChartLegend = true;
  public barPeakHoursChartPlugins = [];
  public chartColors: Array<any> = [
    { // all colors in order
        backgroundColor: "rgba(68,186,220,.25)"
    
    }
] 
  public barPeakHoursChartData: ChartDataSets[] = [
    { data: [28, 48, 40, 19, 66, 27, 40, 20, 40], label: 'Horarios picos' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
