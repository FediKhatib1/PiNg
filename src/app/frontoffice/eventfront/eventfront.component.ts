import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/backoffice/model/Event';
import { EventService } from 'src/app/backoffice/services/eventservice.service';
@Component({
  selector: 'app-eventfront',
  templateUrl: './eventfront.component.html',
  styleUrls: ['./eventfront.component.scss']
})
export class EventfrontComponent implements OnInit {
  eventList : Event[]
  constructor(private dataService: EventService) { }
  event :Event=new Event();
  ngOnInit(): void {
    this.dataService.getall().subscribe((data: Event[]) => (this.eventList = data))
  }



}
