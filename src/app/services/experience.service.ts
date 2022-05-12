import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  readonly API_URL = 'http://localhost:8080' ;

  constructor(private httpClient : HttpClient) { }

  addExperience(experience : any){
    return this.httpClient.post(this.API_URL + "/profile/addExperience" , experience)
  }

  getAllExperiences(){
    return this.httpClient.get(this.API_URL + "/profile/experiences")
  }

  getProfileExperiences(idProfile : number){
    return this.httpClient.get(this.API_URL + "/profile/" + idProfile + "/Pexperiences" )
  }

  getExperienceById(idExperience : number) : Observable<Experience>{
    return this.httpClient.get<Experience>(this.API_URL + "/profile/experiences" + idExperience )
  }

  updateExperience(experience : any , idExperience : number) {
    return this.httpClient.put(this.API_URL + "/profile/experiences" + idExperience ,experience)
  }

  deleteExperience(idExperience : number) {
    return this.httpClient.delete(this.API_URL + "/profile/experiences" + idExperience )
  }

}
