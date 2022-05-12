import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Profile } from 'src/app/model/profile';
import { User } from 'src/app/model/user';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];

    isLoggedIn : boolean ;
    idUser : number ; 
    user : User ;
    Cnprofile : Profile ;
    profile : Profile ;

    constructor(public location: Location,private profileService : ProfileService, private authService : AuthenticationService, private router: Router) {
    }

    ngOnInit() {
      this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url != this.lastPoppedUrl)
               this.yScrollStack.push(window.scrollY);
       } else if (event instanceof NavigationEnd) {
           if (event.url == this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else
               window.scrollTo(0, 0);
       }
     });
     this.location.subscribe((ev:PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });
      
     console.log(this.authService.getUserFromLocalStorage()) ;
     this.isLoggedIn = this.authService.isUserLoggedIn() ;
     this.idUser = this.authService.getUserFromLocalStorage().id ;
     console.log(this.authService.getUserFromLocalStorage().id) ;
   
     this.getConnectedProfile() ;

    }
    getConnectedProfile() {
        this.profileService.connectedProfile(this.idUser).subscribe(data =>{
            console.log(data)
            this.profile = data ;
        }, error => console.error(error)
        ); 
    }

    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '#/home' ) {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if( titlee === '#/documentation' ) {
            return true;
        }
        else {
            return false;
        }
    }
}
