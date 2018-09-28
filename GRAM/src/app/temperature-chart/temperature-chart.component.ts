import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {
  i:number = 12;
  Detail :boolean = false;
  view = [390,210];
  data =[
    {
      "name": "Temp",
      "value": 5
    }
    ];
  
    colorGaugeScheme = {
      domain:['rgba(0, 198, 180,.7)']
    }

    valueFormat = (data =>{
      return data = this.i;
    });
    

  showDetails(){
    if(this.Detail == false){
      this.Detail = true;
    }
    else{
      this.Detail = false;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
