import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { Event } from 'src/app/backoffice/model/Event';
import { EventService } from 'src/app/backoffice/services/eventservice.service';
import * as L from 'leaflet';
@Component({
  selector: 'app-eventdetailsffront',
  templateUrl: './eventdetailsffront.component.html',
  styleUrls: ['./eventdetailsffront.component.scss']
})
export class EventdetailsffrontComponent implements OnInit {
  private map;
  hidden:boolean=false;

  constructor(private activatedRoute : ActivatedRoute,private dataService: EventService) { 
    this.myAngularxQrCode='tutsmake.com'
  }
  

  icon = {
    icon: L.icon({
      iconSize: [ 25, 41 ],
      iconAnchor: [ 13, 0 ],
      // specify the path here
      iconUrl: 'assets/leaflet/marker-icon.png',
      shadowUrl: 'assets/leaflet/marker-shadow.png'
   })
  };
  event :Event
  id:any
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value:'https://www.techiediaries.com/';
  myAngularxQrCode: string = null;
  ngOnInit(): void {

    this.id = this.activatedRoute.snapshot.params['id'];
    this.dataService.gete(this.id).subscribe((data: Event) => (this.event= data))


    this.dataService.gete(this.id).subscribe((res: Event) => {
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
        const lon = res.lng;
        const lat =res.lat;
        const marker = L.marker([lat, lon],this.icon);
        
        marker.addTo(this.map);
      
    });
  }

}
