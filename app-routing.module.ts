import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DayDetailsComponent } from 'src/daydetails/daydetails.component';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/Home/home.component';
import { DailyWeatherComponent } from 'src/appdailyweather/appdailyweather.component';


export const appRoutes: Routes=[
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'daydetails', component: DayDetailsComponent},
  {path: 'DailyWeather', component: DailyWeatherComponent}
  ];

export class AppRoutingModule { }
