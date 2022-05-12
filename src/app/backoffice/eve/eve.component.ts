


import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DataSource} from '@angular/cdk/collections';
import { ChartData, ChartOptions } from 'chart.js';
import {BehaviorSubject, fromEvent, merge, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AddeventComponent } from '../dialogEvent/addevent/addevent.component';
import { EventService } from '../services/eventservice.service';
import { Event } from '../model/Event';
import * as L from 'leaflet';

@Component({
  selector: 'app-eve',
  templateUrl: './eve.component.html',
  styleUrls: ['./eve.component.scss']
})


export class EveComponent implements OnInit,AfterViewInit {

  private map;
  hidden:boolean=false;
  event :Event=new Event();
  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
  
    tiles.addTo(this.map);
  }

 
  displayedColumns = ['id', 'title'];
  index: number;
  id: number;
  tripnbr : number = 0;
  country : any[]
  nbrVisit : number=0;
  nbrSemi : number = 0;
 eventList : Event[]
 icon = {
  icon: L.icon({
    iconSize: [ 25, 41 ],
    iconAnchor: [ 13, 0 ],
    // specify the path here
    iconUrl: 'assets/leaflet/marker-icon.png',
    shadowUrl: 'assets/leaflet/marker-shadow.png'
 })
};

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              private dataService: EventService) {}
  ngAfterViewInit(): void {
    this.initMap();
    this.selectLocation();
    
  }
  ngOnInit(): void {
    this.dataService.getall().subscribe((data: Event[]) => (this.eventList = data))
  }

   selectLocation() {

    this.map.on('click', (e) => {
        var coord = e.latlng;
        var lat = coord.lat;
        var lng = coord.lng;
        this.event.lat=lat;
        this.event.lng=lng;
    
         var mp = new L.Marker([lat, lng],this.icon).addTo(this.map);
    });
}       
showForm() {
  this.hidden = false;
}
hideForm() {
  this.hidden = true;
}           
  add(event:Event){
    this.dataService.addProduct(event).subscribe();
  }   
  delete(id:number){
    this.dataService.delet(id).subscribe();
    location.reload();

  }    

}

