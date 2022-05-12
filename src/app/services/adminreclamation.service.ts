import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Reclamation} from '../model/reclamation';
import {Block} from '../model/block';

@Injectable({
  providedIn: 'root'
})
export class AdminreclamationService {


  constructor(private http: HttpClient) { }

  api: string = 'http://localhost:8087/admin'
  getBlockUsers() {
    return this.http.get<Block[]>(this.api + '/allblocks')
  }


  blockUser( email : string ) {
    // @ts-ignore
    return this.http.get(this.api+'/blockUser?blockedUser='+ email  )
  }


  unBlockUser( email : string ) {
    // @ts-ignore
    return this.http.get(this.api+'/unblockUser?unblockUser='+ email  )
  }

  getComplaintMonth() {
    return this.http.get<Block[]>(this.api + '/complaintMonth')
  }

  getComplaintWeek() {
    return this.http.get<Block[]>(this.api + '/complaintWeek')
  }




}
