import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphicDataComponent } from './graphic-data/graphic-data.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    GraphicDataComponent
  ],
  exports:[
    
  ],
  imports: [
    CommonModule,
    ChartsModule
  ]
})
export class MetricsModule { }
