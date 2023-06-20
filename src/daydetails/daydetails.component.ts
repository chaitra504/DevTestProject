import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, EventEmitter, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { HighchartsChartComponent } from "highcharts-angular";
import { HighChartModel } from "src/Models/highchart.model";
import { weather } from "src/Models/weather.model";
import { HighchartService } from "src/Services/highchart.service";
import { HighChartControlComponent } from "src/highchartcontrol/highchartcontrol.component";

@Component({
    selector: 'app-day-details',
    templateUrl: './daydetails.component.html',
    styleUrls: ['./daydetails.component.css'],
    changeDetection : ChangeDetectionStrategy.OnPush
  })

export class DayDetailsComponent implements OnInit{
   dailyForm!: FormGroup;

    weatherInfo? : weather;
    latitude? : number;
    longitude? : number;
    timezone? : string;
    temprature? : number;
    windspeed? : number;
    dayTempMap?  : number[];
    tommorowTempMap? : number[];
    isLoadAppDailyWeather : boolean;
    

  constructor(private route: ActivatedRoute,private fb: FormBuilder,private router : Router, private cd: ChangeDetectorRef,
    private highchartservice : HighchartService){
    this.weatherInfo = new weather();
    this.dayTempMap =[];
    this.tommorowTempMap = [];
    this.isLoadAppDailyWeather  = false;
    this.cd.markForCheck();
  }
  
  @ViewChild(HighchartsChartComponent,{static:false}) highchrt: HighChartControlComponent |undefined;
   
  url  = this.router.url;
  
  //routing query parameter is received in this function from main component
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => 
    this.weatherInfo=JSON.parse(params.params.weatherInfo)
    ); 

    this.latitude = this.weatherInfo?.latitude;
    this.longitude = this.weatherInfo?.longitude;
    this.timezone = this.weatherInfo?.timezone;
    this.temprature= this.weatherInfo?.current_weather?.temperature;
    this.windspeed = this.weatherInfo?.current_weather?.windspeed;

      this.dailyForm = this.fb.group({
      cityLongitude: new FormControl(''),
      cityLatitude: new FormControl(''),
      cityName: new FormControl('')
    });
  
  }

  onsubmit(form: FormGroup)
  {
    this.isLoadAppDailyWeather = true;
    //this.router.navigate([`/daydetails`]);

    this.highchartservice.getTempratures(this.dailyForm.controls["cityLatitude"].value,
    this.dailyForm.controls["cityLongitude"].value).then(value => {
      this.cd.markForCheck();

        this.dayTempMap = (value as HighChartModel).dayTempMap;
        this.tommorowTempMap =  (value as HighChartModel).tommorowTempMap;
        this.highchrt?.chartRef?.redraw();
      });
  }
}