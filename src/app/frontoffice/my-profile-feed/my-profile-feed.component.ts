import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { Profile } from 'src/app/model/profile';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ExperienceService } from 'src/app/services/experience.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-my-profile-feed',
  templateUrl: './my-profile-feed.component.html',
  styleUrls: ['./my-profile-feed.component.css']
})
export class MyProfileFeedComponent implements OnInit {
    idProfile : number ;
    profile : Profile = new Profile() ;

    idExperience : number ;
    experience : Experience ;
    listExperiences : any ;

    isLoggedIn : boolean ;
    idUser : number ;
    user : User ;

  constructor(
      private route : ActivatedRoute ,
      private profileService :ProfileService ,
      private experienceService : ExperienceService,
      public location: Location,
      private authService : AuthenticationService,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isUserLoggedIn() ;
    this.idUser = this.authService.getUserFromLocalStorage().id ;
    this.getConnectedProfile() ;

    this.user = this.authService.getUserFromLocalStorage() ;
   
     console.log(this.authService.getUserFromLocalStorage().id) ;
     console.log(this.authService.getUserFromLocalStorage()) ;
    
     this.getAllExperiences();

  }
  getConnectedProfile() {
     this.profileService.connectedProfile(this.idUser).subscribe((data : Profile) => (this.idProfile = data.idProfile) ) ;
  }

  getAllExperiences() {
    this.experienceService.getProfileExperiences(this.idProfile).subscribe(res => this.listExperiences = res) ;
  }



 /*getProfile() {
    this.profileService.consultProfile(this.idProfile).subscribe(data =>{
        console.log(data)
        this.profile = data ;
    }, error => console.error(error)
    );
  } */

}
