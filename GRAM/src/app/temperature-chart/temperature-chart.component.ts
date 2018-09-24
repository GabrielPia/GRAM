import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temperature-chart',
  templateUrl: './temperature-chart.component.html',
  styleUrls: ['./temperature-chart.component.css']
})
export class TemperatureChartComponent implements OnInit {
  Detail :boolean = false;
  view = [390,210];
  EX = (data => data = this.data[0]);
  EY = (data => data = this.data[0]);
  data =[
    {
      "name": "Albania",
      "series": [
        {
          "value": 2661,
          "name": "2016-09-17T11:49:16.051Z"
        },
        {
          "value": 5324,
          "name": "2016-09-23T04:49:45.432Z"
        },
        {
          "value": 6349,
          "name": "2016-09-22T05:56:25.371Z"
        },
        {
          "value": 2388,
          "name": "2016-09-14T20:01:38.718Z"
        },
        {
          "value": 5224,
          "name": "2016-09-22T07:11:38.362Z"
        }
      ]
    },
    {
      "name": "Honduras",
      "series": [
        {
          "value": 4943,
          "name": "2016-09-17T11:49:16.051Z"
        },
        {
          "value": 4072,
          "name": "2016-09-23T04:49:45.432Z"
        },
        {
          "value": 5750,
          "name": "2016-09-22T05:56:25.371Z"
        },
        {
          "value": 5093,
          "name": "2016-09-14T20:01:38.718Z"
        },
        {
          "value": 4327,
          "name": "2016-09-22T07:11:38.362Z"
        }
      ]
    },
    {
      "name": "Equatorial Guinea",
      "series": [
        {
          "value": 6839,
          "name": "2016-09-17T11:49:16.051Z"
        },
        {
          "value": 6796,
          "name": "2016-09-23T04:49:45.432Z"
        },
        {
          "value": 5650,
          "name": "2016-09-22T05:56:25.371Z"
        },
        {
          "value": 5542,
          "name": "2016-09-14T20:01:38.718Z"
        },
        {
          "value": 5356,
          "name": "2016-09-22T07:11:38.362Z"
        }
      ]
    },
    {
      "name": "Ethiopia",
      "series": [
        {
          "value": 6670,
          "name": "2016-09-17T11:49:16.051Z"
        },
        {
          "value": 6948,
          "name": "2016-09-23T04:49:45.432Z"
        },
        {
          "value": 2079,
          "name": "2016-09-22T05:56:25.371Z"
        },
        {
          "value": 2086,
          "name": "2016-09-14T20:01:38.718Z"
        },
        {
          "value": 2920,
          "name": "2016-09-22T07:11:38.362Z"
        }
      ]
    },
    {
      "name": "Guyana",
      "series": [
        {
          "value": 6575,
          "name": "2016-09-17T11:49:16.051Z"
        },
        {
          "value": 6443,
          "name": "2016-09-23T04:49:45.432Z"
        },
        {
          "value": 4918,
          "name": "2016-09-22T05:56:25.371Z"
        },
        {
          "value": 3458,
          "name": "2016-09-14T20:01:38.718Z"
        },
        {
          "value": 5570,
          "name": "2016-09-22T07:11:38.362Z"
        }
      ]
    }
  ];
  
  

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
