import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reclamation } from '../model/reclamation';



@Injectable({
  providedIn: 'root'
})
export class ReclamationService  {



  reclamation: Reclamation ;

  constructor(private http: HttpClient) { }
  //json-server --watch db.json
  api: string = 'http://localhost:8087/complaint'
  getComplaint() {
    return this.http.get<Reclamation[]>(this.api + '/allComp')
  }


  getComplaintById(id: number) {
    return this.http.get<Reclamation>(this.api + '/seeComplaint/' + id)

  }

  addComplaint(reclamation: Reclamation) {
    return this.http.post(this.api+'/addComplaint', reclamation)
  }

  like( id: number ) {
    // @ts-ignore
    return this.http.put(this.api+'/like/'+ id  )
  }

  see( id: number ) {
    // @ts-ignore
    return this.http.get(this.api+'/seeComplaint/'+ id  )
  }

  nbrLike( id: number ) {
    // @ts-ignore
    return this.http.get(this.api+'/nbrLike/'+ id  )
  }


  }
