import { Component, OnInit } from '@angular/core';
import {Reclamation} from "../../model/reclamation";
import {User} from "../../model/user";
import {AuthenticationService} from "../../services/authentication.service";
import {ReclamationService} from "../../services/reclamation.service";
import {Likeanddislike} from "../../model/likeanddislike";


@Component({
  selector: 'app-all-complaint',
  templateUrl: './all-complaint.component.html',
  styleUrls: ['./all-complaint.component.css']
})
export class AllComplaintComponent implements OnInit {

  image: string = '../assets/reclamation.jpg'
  reclamation : Reclamation ;
  likeDislike : Likeanddislike ;
  listReclamation :Reclamation[] ;
  public loggedInUser: User;

  constructor(private authenticationService: AuthenticationService , private rService : ReclamationService ) { }

  ngOnInit(): void {
    this.rService.getComplaint().subscribe((data: Reclamation[]) => (this.listReclamation = data).forEach(p => { console.log(p) }))
    this.loggedInUser = this.authenticationService.getUserFromLocalStorage();
    this.reclamation = new Reclamation()
  }

  addLike(id: number) {
    this.rService.like(id).subscribe(
      () => {
        this.listReclamation.forEach(rec => {
          if (rec.idComplaint == id) {
            let rec = Reclamation
            let i = this.listReclamation.indexOf(this.reclamation)
            this.listReclamation.push()
          }
        })
      }
    )
  }
}
