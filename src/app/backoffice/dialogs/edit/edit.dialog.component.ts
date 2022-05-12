import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {Component, Inject, OnInit} from '@angular/core';
import { Trip } from '../../model/Trip';
import { TripService } from '../../services/tripservice.service';
import { SnackBarService } from '../../services/snack-bar.service';
import {FormControl, Validators} from '@angular/forms';
import { User } from '../../model/user';


@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../../dialogs/edit/edit.dialog.html',
  styleUrls: ['../../dialogs/edit/edit.dialog.css']
})
export class EditDialogComponent  {
  usersList:User[]
  userid:number
  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public dataService: TripService,
              public snack :SnackBarService) { }
 

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
    // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  stopEdit(): void {
    this.dataService.updateItem(this.data);
    this.snack.openSnackBar('Trip updated succeflly','ok');
  }
}
