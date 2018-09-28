import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNavbar:boolean = false;
  showList:boolean = false;
  TempChart:boolean = false;
  showTempChart(){
    if(this.TempChart == false){
      this.TempChart = true;
    }else{
      this.TempChart = false;
    }
  }

  Show(x:number){
    if(x == 1){
      if(this.showNavbar == false){
      this.showNavbar = true;
      this.showList = true;
      }else{
        this.showNavbar = false;
        this.showList = false;
      }
    }
  }

  
}
