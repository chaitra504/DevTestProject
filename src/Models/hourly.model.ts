export class hourly_1{
    
        time?:string[];
        temperature_2m?:number[];
      
}

export class dailyRecord{
        hourName?:string;
        hourTemp:number;
        constructor(name :string,temp :number)
        {
this.hourName = name;
this.hourTemp = temp;
        }
}