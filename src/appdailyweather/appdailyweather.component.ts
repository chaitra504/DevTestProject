import { AfterContentInit, Component, OnInit, ViewChild,Output, EventEmitter, Renderer2, ElementRef, Input, ChangeDetectionStrategy, ChangeDetectorRef, DoCheck } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { weather } from 'src/Models/weather.model';
import { dailyRecord, hourly_1 } from 'src/Models/hourly.model';
import { DatePipe } from '@angular/common';
import { HighChartControlComponent } from 'src/highchartcontrol/highchartcontrol.component';
import { HighchartService } from 'src/Services/highchart.service';
import { HighChartModel } from 'src/Models/highchart.model';

const term = '2023-05-31';
const term1 = '2023-06-01';
const term2 = '2023-06-02';
const term3 = '2023-06-03';
const term4 = '2023-06-04';
@Component({
    selector: 'app-daily-weather',
    templateUrl: './appdailyweather.component.html',
    styleUrls: ['./appdailyweather.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })


export class DailyWeatherComponent implements OnInit, DoCheck{
  
     weatherdetails?:weather;
     hourInfo? : hourly_1;
     timings?: string[];
     tempratures? : number[];
     records? : dailyRecord[];
     dayTempMap?  : number[];
     tommorowTempMap? : number[];

     @ViewChild(HighChartControlComponent, {static:false}) child: HighChartControlComponent | undefined;


    // @ViewChild("tempgrid") table: ElementRef | undefined;
    constructor(private http: HttpClient,private datePipe: DatePipe, private cd : ChangeDetectorRef,
      private highchartService : HighchartService)
    {
      debugger;
      this.latitude='18.54';
      this.longitude = '73.89';
    }
  ngDoCheck(): void {
        this.cd.markForCheck();
  }
    @Input() isGridView? : boolean;
    @Input() latitude? : string;
    @Input() longitude? : string;
    

     ngOnInit() {
        // if(!this.isGridView){
        //   this.baseUrl = 'https://api.open-meteo.com/v1/forecast?latitude='+this.latitude+'&longitude='+this.longitude+'&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto';
        // }
        console.log(term);
       //Note- This function should be part of highchartcontrol component
        this.highchartService.getTempratures(this.latitude,
                            this.longitude).then(value => {
                              
                              this.dayTempMap =  (value as HighChartModel).dayTempMap;
                              this.tommorowTempMap =  (value as HighChartModel).tommorowTempMap;
                              this.records = (value as HighChartModel).records;
                              this.weatherdetails = new weather();
                              this.weatherdetails= (value as HighChartModel).weatherInfo;
                            });
       
    }
  
 
  }