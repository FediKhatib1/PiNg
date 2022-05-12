import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Profile } from 'src/app/model/profile';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  listProfiles : Profile[] ;
  form : boolean = false ;
  profile : Profile ;
  closeResult! : string ;

  isLoggedIn : boolean ;
  idUser : number ; 
  user : User ;
  

  constructor(
    private profileService : ProfileService,
    private modalService : NgbModal,
    private authService : AuthenticationService
    ) { }

  ngOnInit(): void {
    this.getAllProfiles() ;

    this.isLoggedIn = this.authService.isUserLoggedIn() ;
     this.idUser = this.authService.getUserFromLocalStorage().id ;


  }

  getAllProfiles() {
    this.profileService.getAllProfiles().subscribe(res => this.listProfiles = res)
  }

}
