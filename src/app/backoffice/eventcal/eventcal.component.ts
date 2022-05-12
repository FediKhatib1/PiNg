
import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking
import { Observable } from 'rxjs';
import { Event } from '../model/Event';
import { EventService } from '../services/eventservice.service';
import { TripService } from '../services/tripservice.service';
@Component({
  selector: 'app-eventcal',
  templateUrl: './eventcal.component.html',
  styleUrls: ['./eventcal.component.scss']
})
export class EventcalComponent implements OnInit {

  triplist : Observable<Event[]>;
  calendarOptions: CalendarOptions;
  constructor( public dataService: EventService) { }

  ngOnInit(): void {
    this.dataService.getall().subscribe((data) => {
      this.calendarOptions.events = data.map(
        evt => {
          return { date: evt.date, title: evt.description }
        })
    })

    this.calendarOptions = {
      initialView: 'dayGridMonth',
     
      events: [
      
      ]
    };
    }
  }
 
