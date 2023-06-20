import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyWeatherComponent } from 'src/appdailyweather/appdailyweather.component';
import { HighChartControlComponent } from 'src/highchartcontrol/highchartcontrol.component';
import {DayDetailsComponent} from 'src/daydetails/daydetails.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { HighchartsChartComponent, HighchartsChartModule } from 'highcharts-angular';
import {appRoutes} from './app-routing.module'
import { RouterModule } from '@angular/router'
import { HomeComponent } from 'src/Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyWeatherComponent,
    DayDetailsComponent,
    HighChartControlComponent,
    HomeComponent,
         ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    HighchartsChartModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule],
  providers: [DatePipe,HighchartsChartComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }


