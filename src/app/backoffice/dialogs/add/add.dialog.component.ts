import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { Trip } from '../../model/Trip'
import { TripService } from '../../services/tripservice.service';
import { SnackBarService } from '../../services/snack-bar.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../model/user';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../../dialogs/add/add.dialog.html',
  styleUrls: ['../../dialogs/add/add.dialog.css']
})

export class AddDialogComponent implements OnInit {
  usersList:User[]
  userid:number
  date : Date
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Trip,
              public dataService: TripService,
              public snack :SnackBarService) { }
  ngOnInit(): void {
    this.date = new Date()

    this.dataService.getalluser().subscribe((dataa:any)=>(this.usersList = dataa))
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
    this.dataService.addProduct(this.data,this.userid);
    this.snack.openSnackBar('Trip added succeflly','ok');
   
  }
}
