import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Trip} from '../model/Trip';
import {User} from '../model/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly API_URL = 'http://localhost:8080/trip/getallTrip';

  dataChange: BehaviorSubject<Trip[]> = new BehaviorSubject<Trip[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient) {}

  get data(): Trip[] {
    return this.dataChange.value;
  }

  addEvent(){
    
  }

  getDialogData() {
    return this.dialogData;
  }
  getalltrips():Observable<Trip[]> {
    return this.httpClient.get<Trip[]>('http://localhost:8080/trip/getallTrip')
  }
  getalluser(){
    return this.httpClient.get<User>('http://localhost:8080/trip/getallusers')
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<Trip[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addIssue (issue: Trip): void {
    this.dialogData = issue;
  }

  updateIssue (issue: Trip): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }
  saddProduct(e: Trip) {
    return this.httpClient.post('http://localhost:8080/trip/addTrip/1', e)
  }
  invit(id: number) {
    return this.httpClient.post('http://localhost:8080/trip/invit/' + id,null)
  }
   // ADD, POST METHOD
   addProduct(trip: Trip,id : number): void {
    this.httpClient.post('http://localhost:8080/trip/addTrip'+ '/'+id, trip).subscribe(data => {
      this.dialogData = trip;
     
      },
      (err: HttpErrorResponse) => {
    
    });
   }


   deleteItem(id: number): void {
    this.httpClient.delete('http://localhost:8080/trip/deleteTrip/' + id).subscribe(data => {
      console.log(data['']);
        
      },
      (err: HttpErrorResponse) => {
       
      }
    );
  }

  updateItem(trip: Trip): void {
    this.httpClient.put('http://localhost:8080/trip/updateTrip/' + trip.idTrip, trip).subscribe(data => {
        this.dialogData = trip;
       
      },
      (err: HttpErrorResponse) => {
        
      }
    );
  }
}



   


/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:

    // ADD, POST METHOD
    addItem(kanbanItem: KanbanItem): void {
    this.httpClient.post(this.API_URL, kanbanItem).subscribe(data => {
      this.dialogData = kanbanItem;
      this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
     updateItem(kanbanItem: KanbanItem): void {
    this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
        this.dialogData = kanbanItem;
        this.toasterService.showToaster('Successfully edited', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.API_URL + id).subscribe(data => {
      console.log(data['']);
        this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
*/




