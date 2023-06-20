import { AfterContentChecked, Component, ViewChild } from "@angular/core";
import { RouterModule } from '@angular/router';import { Router,ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { weather } from "src/Models/weather.model";
import { DailyWeatherComponent } from "src/appdailyweather/appdailyweather.component";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })

export class HomeComponent implements AfterContentChecked{
    weatherData?: weather;
    @ViewChild(DailyWeatherComponent, {static:false}) child: DailyWeatherComponent | undefined;
    constructor(private router: Router, private route: ActivatedRoute){
    }
    ngAfterContentChecked(): void {
        
    }

    redirect():void{
        this.router.navigate(['/daydetails/'],{queryParams:{weatherInfo:JSON.stringify(this.child?.weatherdetails)}});
    }

  
}