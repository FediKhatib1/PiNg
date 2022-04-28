import { Component, OnInit } from '@angular/core';
import {FormControl, NgModel, Validators} from '@angular/forms';
import {Reclamation} from "../../model/reclamation";
import {ReclamationService } from "../../services/reclamation.service";
import {User} from "../../model/user";
import {AuthenticationService} from "../../services/authentication.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  captcha: string;



  listReclamation :Reclamation[] ;
  email = new FormControl('', [Validators.required, Validators.email]);
  object = new FormControl('', [Validators.required, Validators.required]);
  message = new FormControl('', [Validators.required, Validators.required]);
  type = new FormControl('', [Validators.required, Validators.required]);

  form : boolean = false;
  reclam : Reclamation ;
  public loggedInUser: User;

  closeResult! : string;

  getErrorMessageType() {
    if (this.type.hasError('required'))  {
      return 'you must select a value ';
    }

    return this.type.hasError('email') ? 'Not a valid email' : '';
  }
  constructor( public router: Router,  private authenticationService: AuthenticationService, private reclamationService : ReclamationService  )
  {
    this.captcha = '';

  }

  ngOnInit(): void {
    this.reclamationService.getComplaint().subscribe((data: Reclamation[]) => (this.listReclamation = data).forEach(p => { console.log(p) }))
    this.loggedInUser = this.authenticationService.getUserFromLocalStorage();
    this.reclam = new Reclamation()
  }


  addReclamation( recl : Reclamation) {

    this.reclamationService.addComplaint(recl).subscribe(
      () => (this.listReclamation.push(recl))
    )

  }


  getErrorMessage() {
    if (this.email.hasError('required'))  {
      return 'you must entre a value ';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

/*  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }*/

  goToPage(pageName:string){
    this.router.navigate([`${pageName}`]);
  }

  closeForm(){

  }
  cancel(){
    this.form = false;
  }
}
