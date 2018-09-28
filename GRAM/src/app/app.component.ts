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
  

  Show(x:number){
    if(x == 1){
      if(this.showNavbar == false){
      this.showNavbar = true;
      }else{
        this.showNavbar = false;
      }
    }
  }

  
}
