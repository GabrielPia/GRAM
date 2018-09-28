import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { MatTooltipModule , TooltipPosition } from '@angular/material/tooltip';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TemperatureChartComponent } from './temperature-chart/temperature-chart.component';
import { LinearGaugeChartComponent } from './linear-gauge-chart/linear-gauge-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureChartComponent,
    LinearGaugeChartComponent
  ],
  imports: [
    BrowserModule,
    NgxChartsModule,
    MatTooltipModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
