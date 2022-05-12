import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { Event } from '../../model/Event'
import { TripService } from '../../services/tripservice.service';
import { SnackBarService } from '../../services/snack-bar.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../model/user';
import { EventService } from '../../services/eventservice.service';


@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.scss']
})
export class AddeventComponent implements OnInit {

  usersList:User[]
  userid:number
  date : Date
  constructor(public dialogRef: MatDialogRef<AddeventComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Event,
              public dataService: EventService,
              public snack :SnackBarService) { }
  ngOnInit(): void {
    this.date = new Date()

    
  }

  formControl = new FormControl('', [
    Validators.required
    
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // empty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.dataService.addProduct(this.data);
    this.snack.openSnackBar('Event added succeflly','ok');
   
  }
}
