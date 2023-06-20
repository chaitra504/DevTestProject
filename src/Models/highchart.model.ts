import { dailyRecord } from "./hourly.model";
import { weather } from "./weather.model";

export class HighChartModel
{
    dayTempMap? : number[]|undefined;
    tommorowTempMap? : number[]|undefined;
    records? : dailyRecord[];
    weatherInfo? : weather;
    constructor(dayTemps? :number[],tomorrowTemps? :number[], rec? : dailyRecord[], info?:weather)
    {
     this.dayTempMap = dayTemps;
     this.tommorowTempMap = tomorrowTemps;
     this.records = rec;
     this.weatherInfo = info;
    }
}