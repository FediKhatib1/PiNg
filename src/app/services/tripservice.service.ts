import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trip } from '../model/Trip';

@Injectable({
  providedIn: 'root'
})
export class TripService {
  ToDo : any
  api :any

  constructor(private http : HttpClient) {

    this.api = 'http://localhost:8087/trip/addTrip/2'
   }

   getToDo(){

  return this.http.get<Trip[]>('http://localhost:8087/trip/getallTrip');
    }

    getProductById(id: number) {
      return this.http.get<Trip>(this.api + '/' + id)
    }

    addProduct(trip: Trip) {
      return this.http.post(this.api, trip)
    }
    deleteProduct(id: number) {
      return this.http.delete('http://localhost:8087/trip/deleteTrip' + '/' + id)
    }
}
