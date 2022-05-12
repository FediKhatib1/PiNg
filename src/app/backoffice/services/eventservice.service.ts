import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Event } from '../model/Event';

@Injectable({
    providedIn: 'root'
})
export class EventService {
    dataChange: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);
    // Temporarily stores data from dialogs
    dialogData: any;
  
    constructor(private httpClient: HttpClient) {}
    get data(): Event[] {
        return this.dataChange.value;
      }



      gete(id:number){
         return  this.httpClient.get('http://localhost:8080/event/gete' + '/' + id)
      }
      getDialogData() {
        return this.dialogData;
      }
      getAllIssues() {
        this.httpClient.get<Event[]>('http://localhost:8080/event/getAll').subscribe(data => {
            this.dataChange.next(data);
          },
          (error: HttpErrorResponse) => {
          console.log (error.name + ' ' + error.message);
          });
      }

      addProduct(event: Event) {
       return  this.httpClient.post<Event>('http://localhost:8080/event/addevent', event)
      
       }
       delet(id: number) {
        return  this.httpClient.delete('http://localhost:8080/event/delete' + '/' + id)
       
        }

       getall() {
      return  this.httpClient.get<Event[]>('http://localhost:8080/event/getAll')
       }
       deleteItem(id: number): void {
        this.httpClient.delete('http://localhost:8080/trip/deleteTrip/' + id).subscribe(data => {
          console.log(data['']);
            
          },
          (err: HttpErrorResponse) => {
           
          }
        );
      }
    
      updateItem(event: Event): void {
        this.httpClient.put('http://localhost:8080/trip/updateTrip/' + event, event).subscribe(data => {
            this.dialogData = event;
           
          },
          (err: HttpErrorResponse) => {
            
          }
        );
      }
}
