import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})


export class DevicesPage implements OnInit {
  

  constructor(private http: HttpClient, private router: Router) { }

  devices: any =[];


  
    

  ngOnInit() {
    
    //window.initMap = this.initMap;

    let headers = new HttpHeaders();
    headers = headers.set('X-User-id', '672');
    headers = headers.set('X-User-hash', '78159f612967618e093106860778850e');

    this.http.get("https://data.uradmonitor.com/api/v1/devices/",
    {
      headers
    })
      .subscribe(data=>
        {
          console.log(data)
          this.devices=data;
        })
  }

  gotodevice(id:any)
  {
    this.router.navigateByUrl('/devices/device?id='+ id);
  }

}
