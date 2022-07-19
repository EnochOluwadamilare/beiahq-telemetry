import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-device',
  templateUrl: './device.page.html',
  styleUrls: ['./device.page.scss'],
})
export class DevicePage implements OnInit {

  
  id: any;
  obj: any;
  sensors: any=[];
  key: any={};

  varone: any=[];
  vartwo: any=[];

  devicesinfo: any=[];

  

  constructor(private router:Router, private activatedroute:ActivatedRoute, private http: HttpClient) { }

  


  ngOnInit() {
    this.activatedroute.queryParams.subscribe(params => {
      this.id = params['id'];

      let headers = new HttpHeaders();
      headers = headers.set('X-User-id', '672');
      headers = headers.set('X-User-hash', '78159f612967618e093106860778850e');
      this.http.get('https://data.uradmonitor.com/api/v1/devices/'+this.id,
      {
        headers
      })
        .subscribe(data=>{
          console.log(data);
          this.sensors=data;
          
          console.log(this.sensors);
          console.log(data["pressure"]);
          console.log(data["temperature"]);
          console.log(JSON.stringify(data));

          let iterableLogList = Object.keys(this.sensors);

          for (const sensor in data) {
            console.log(sensor);
            var newsensors= new Object(data);
            console.log( newsensors);

            this.sensors['sensor']=sensor;
            console.log(this.sensors);

            this.key["keys"]=sensor;
            console.log(this.key)
            // console.log(this.key[])
            var nww=new KeyValueDiffers(this.sensors);
            console.log(nww.factories.keys);

            // let iterableLogList = Object.keys(this.logList);
            
          }

        }
      );

        this.http.get('https://data.uradmonitor.com/api/v1/devices/',{
          headers
        })
          .subscribe(data=>{
            console.log(data);
            
            this.devicesinfo=data;

            for (const device in data)
            {
              this.varone=device;
              for (const dev in this.varone)
              {
                console.log(device["id"]);
              }
            }
          }
        );
    });
  }

}
