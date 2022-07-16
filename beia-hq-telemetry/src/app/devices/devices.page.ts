import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  constructor(private http: HttpClient) { }

  devices: any =[];

  ngOnInit() {
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

}
