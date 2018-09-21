import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Detail = false;
  OpenTimes = 30;
  title = 'GRAM';
  Open = "A porta foi aberta: "+30+" vezes";
  view: any[] = [230, 150];
  showLegend = true;
  colorGaugeScheme = this.colorDefinition();

  colorDefinition(){
    if(this.OpenTimes>0 && this.OpenTimes < 50){
        return {
          domain: ['rgba(0, 198, 180,.7)']
        };
    }
    else{
     return {
        domain: ['rgba(255,0,0),.7']
      };
    }
  }

  showDetails(){
    if(this.Detail == false){
      this.Detail = true;
    }
    else{
      this.Detail = false;
    }
  }
}
