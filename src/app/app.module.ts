import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { AngularMyDatePickerModule } from 'angular-mydatepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { D3LearnComponent } from './d3-learn/d3-learn.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    DonutChartComponent,
    DoughnutChartComponent,
    D3LearnComponent,
    RadioButtonComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AngularMyDatePickerModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
