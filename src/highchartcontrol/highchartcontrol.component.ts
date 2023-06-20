import { DatePipe } from '@angular/common';
import {  AfterViewChecked, SimpleChange, Component,Input,  OnInit,ChangeDetectorRef, AfterViewInit, AfterContentInit, DoCheck, OnChanges, SimpleChanges, AfterContentChecked, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import * as Highcharts from 'highcharts';
import {Options,XrangePointOptionsObject} from 'highcharts';
import { HighchartsChartComponent } from 'highcharts-angular';
import { dailyRecord } from 'src/Models/hourly.model';


@Component({
    selector: 'apphighcharts-chart',
    templateUrl: './highchartcontrol.component.html',
    styleUrls: ['./highchartcontrol.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
  })


  export class HighChartControlComponent implements OnInit,OnChanges{
    chartRef?: Highcharts.Chart;
    @Input() datewiseTemprature?: number[] | undefined;
    @Input() datewiseTempTomrw? :number[] |undefined;
    nextDayTemp!: string[];
    isChanged : boolean=false;
    chartCallback: Highcharts.ChartCallbackFunction = chart => {
      this.chartRef = chart;
    };
   
    constructor(private datepipe: DatePipe ,private high_chart : HighchartsChartComponent,
      public cd: ChangeDetectorRef){
     // this.datewiseTemprature = new Map<string,dailyRecord[]>();

    }
  ngOnChanges(changes: SimpleChanges): void {
  debugger;
  if(changes['datewiseTemprature'].firstChange){
    this.isChanged = false;
  }
     if(this.datewiseTemprature=== undefined && this.datewiseTempTomrw=== undefined)
     return;
    if((this.datewiseTemprature as XrangePointOptionsObject[]).length>0 && 
    (this.datewiseTempTomrw as XrangePointOptionsObject[]).length > 0 && 
    !this.isChanged){
    this.highcharts.charts[0]?.series[0].update({
      data: (this.datewiseTemprature as XrangePointOptionsObject[]),
      type: 'line',
     });
    
     this.highcharts.charts[0]?.addSeries({
       data: (this.datewiseTempTomrw as XrangePointOptionsObject[]),
       type: 'line',
       name: '2023-06-01',
             
      });
      
      this.isChanged=true;
     }
     else if((this.datewiseTempTomrw as XrangePointOptionsObject[]).length > 0 && 
     (this.datewiseTempTomrw as XrangePointOptionsObject[]).length > 0 && this.isChanged)
      {
      debugger;
      this.highcharts.charts[0]?.series[0].update({
        data: (this.datewiseTemprature as XrangePointOptionsObject[]),
        type: 'line',
       });
      
       this.highcharts.charts[0]?.series[1].update({
         data: (this.datewiseTempTomrw as XrangePointOptionsObject[]),
         type: 'line',
        },true);
      }
    this.cd.markForCheck();
  }
      
   ngOnInit(): void {
    debugger;
    this.isChanged = false;
  

  }

    highcharts  = Highcharts;

    config : Options = { chart: {
      type: 'line',
      events:{
        render:function(){
          this.reflow()
        }
      }
    },
    title: {
      text: 'Weekly Temprature'
    },
    xAxis: {
      categories: ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18',
      '19','20','21','22','23','00']
    },
    yAxis: {
       title: {
        text: 'Hourly Temprature'
      }
    },
   
    series: [{
      type:'line',
      name: '2023-05-31',
      data: this.datewiseTemprature,
    },
  ]
  };
  }


