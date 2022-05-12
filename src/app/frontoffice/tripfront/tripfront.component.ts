import { Component, OnInit } from '@angular/core';

import { Trip } from 'src/app/model/Trip';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { TripService } from 'src/app/services/tripservice.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tripfront',
  templateUrl: './tripfront.component.html',
  styleUrls: ['./tripfront.component.scss']
})
export class TripfrontComponent implements OnInit {
  page = 2;
  page1 = 3;
  active = 1;
  active1 = 1;
  active2 = 1;
  trip: Trip;
  partner : any
user : User
b : boolean=false
  constructor(private tripservice: TripService,private userservice:AuthenticationService) { }

  ngOnInit(): void {
    this.tripservice.getmytrip().subscribe((data:Trip)=>(this.trip = data))
    this.tripservice.getPartner().subscribe((data:any)=>(this.partner =data ))
    

    this.user = this.userservice.getUserFromLocalStorage();
    if(this.user.invitation!=null){
      this.b=true
      console.log(this.b)
    }

    
   
        
    

  }

  accept(){
    this.tripservice.accept().subscribe();
  }
  refuse(){
    this.tripservice.refuse().subscribe();
  }
  send(id:number){
    this.tripservice.invit(id).subscribe();
  }


}
