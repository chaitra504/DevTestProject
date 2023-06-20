import { Injectable } from '@angular/core';
import { dailyRecord, hourly_1 } from 'src/Models/hourly.model';
import { weather } from 'src/Models/weather.model';
import { HighChartModel } from 'src/Models/highchart.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  HttpClient} from '@angular/common/http';
 
  const term = '2023-05-31';
  const term1 = '2023-06-01';

@Injectable({
  providedIn: 'root',
})



export class HighchartService {
    weatherdetails?:weather;
    hourInfo? : hourly_1;
    timings?: string[];
    tempratures? : number[];
    latitude:string='';
    longitude:string='';
    records : dailyRecord[];
     dayTempMap  : number[];
     tommorowTempMap : number[];
    baseUrl:string='';
    constructor(private http: HttpClient) {

        this.records = []; 
        this.dayTempMap =[];
        this.tommorowTempMap = [];
    }

   async  getTempratures(lat?: string, longi? : string) {
    
        let highchartModel: HighChartModel=new HighChartModel([],[],[],undefined);
       
        this.baseUrl= 'https://api.open-meteo.com/v1/forecast?latitude='+lat+'&longitude='+longi+'&hourly=temperature_2m&daily=sunrise,sunset&timezone=auto';
        return new Promise(resolve => {
        this.http.get<weather>(this.baseUrl).subscribe(
            {
                next: async (data) => {
                    this.records = []; 
                    this.weatherdetails = undefined;
                console.log(data);
                this.weatherdetails = data;
                this.hourInfo = this.weatherdetails.hourly;
                if(term !=undefined){
                  //current day hourly temprature
                                          
                  this.createdatewisearray(term).
                  then(value => {
                    this.dayTempMap = [];
                    (value as dailyRecord[]).forEach((item :dailyRecord)=>
                    {
                     let temp=item.hourTemp;
                      this.dayTempMap.push(temp);
                    },
                    highchartModel.dayTempMap = this.dayTempMap
                    );});
  
                  //current day hourly temprature
                  this.createdatewisearray(term1).
                  then(value => {
                    this.tommorowTempMap = [];
                      (value as dailyRecord[]).forEach((item :dailyRecord)=>
                    {
                      let temp=item.hourTemp;
                      this.tommorowTempMap.push(temp);
                  },
                  highchartModel.tommorowTempMap = this.tommorowTempMap
                  );});

                  highchartModel.records = this.records;
                  highchartModel.weatherInfo=this.weatherdetails;
                  resolve(highchartModel);

             }
              },
              error: (e) =>  console.error(e)
            })
        });
          
        

    }

    //get datewise temprature data
   async createdatewisearray(inputDate : string) {
    return new Promise(resolve => {
    let hourlyTemp : dailyRecord[] = [];
    this.timings = this.hourInfo?.time?.filter(x => x.startsWith(inputDate));
    if (this.timings != undefined &&
      this.hourInfo != undefined &&
      this.hourInfo?.temperature_2m != undefined) {
      this.tempratures = this.hourInfo?.temperature_2m.slice(0, this.timings?.length);
    }
    if (this.tempratures != undefined && this.timings != undefined) {
      for (let i = 0; i < this.tempratures?.length; i++) {
        let rec: dailyRecord = { hourName: this.timings[i], hourTemp: this.tempratures[i] };
        if(inputDate===term){
        this.records?.push(rec);
        }
        hourlyTemp.push(rec);
       }
    }
    resolve(hourlyTemp);
  });
  }
}