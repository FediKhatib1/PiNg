import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  readonly API_URL = 'http://localhost:8080' ;

  constructor(private httpClient : HttpClient) { }

  getAllProfiles(){
    return this.httpClient.get<Profile[]>( this.API_URL+ "/user/allProfiles")
  }

  consultProfile(idProfile : number) :Observable<Profile> {
    return this.httpClient.get<Profile>(this.API_URL + "/user/profile/" + idProfile)
  }

  
  connectedProfile(idUser : number) : Observable<Profile> {
    return this.httpClient.get<Profile>(this.API_URL + "/user/Cprofile/" + idUser)
  }

  recProfile(){
    return this.httpClient.get<Profile[]>( this.API_URL + "/user/recprofile" )
  }
  
}
