import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/model/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { Experience } from '../model/experience';
import { User } from '../model/user';
import { ExperienceService } from '../services/experience.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

    idProfile : any ;
    profile : Profile = new Profile() ;

    idExperience : number ;
    experience : Experience ;
    listExperiences : any ;

    listProfiles : Profile[] ;
    form : boolean = false ;
    closeResult! : string ;

    isLoggedIn : boolean ;
    idUser : number ; 
    user : User ;

    constructor(
        private route : ActivatedRoute ,
        private profileService :ProfileService ,
        private experienceService : ExperienceService
    ) { }

    ngOnInit() {
        this.idProfile = this.route.snapshot.params['idProfile']
        this.getProfile();

        this.getRecomandedProfiles() ;

        this.getAllExperiences();
    }
    getRecomandedProfiles() {
        this.profileService.recProfile().subscribe(res => this.listProfiles = res) ;
    }
    getAllExperiences() {
        this.experienceService.getProfileExperiences(this.idProfile).subscribe(res => this.listExperiences = res) ;
    }



    getProfile() {
        this.profileService.consultProfile(this.idProfile).subscribe(data =>{
            console.log(data)
            this.profile = data ;
        }, error => console.error(error)
        );
    }

}
