import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Observable } from 'rxjs';
import { Trip } from '../model/Trip';
import { TripService } from '../services/tripservice.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  triplist : Observable<Trip[]>;
  calendarOptions: CalendarOptions;
  constructor( public dataService: TripService) { }

  ngOnInit(): void {
    this.dataService.getalltrips().subscribe((data) => {
      this.calendarOptions.events = data.map(
        evt => {
          return { date: evt.departureDate, title: evt.object }
        })
    })

    this.calendarOptions = {
      initialView: 'dayGridMonth',
     
      events: [
      
      ]
    };
    }
  }
 
