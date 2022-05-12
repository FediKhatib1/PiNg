import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomHttpResponse } from 'src/app/dto/custom-http-response';
import { User } from 'src/app/model/user';
import { NotificationType } from 'src/app/notification/notification-type';
import { UserService } from 'src/app/services/user.service';
import {SubSink} from "subsink";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  users : User[]
  private subs = new SubSink();
  public refreshing: boolean;

  constructor(private userSer : UserService,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    this.userSer.getAllUs().subscribe((data:User[])=>(this.users = data))
  }

  public getUsers(showNotification: boolean) {
    this.refreshing = true;

    this.subs.sink = this.userService.getAllUsers()
      .subscribe(
        usersPage => {
          this.users = usersPage.content;
          this.userService.addUsersToLocalStorage(this.users);
         // if (showNotification)
           // this.notificationService.notify(NotificationType.SUCCESS, `${this.users.length} users loaded successfully`)
        },
        (errorResponse: HttpErrorResponse) => {
         // this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
          this.refreshing = false;
        },
        () => {
          this.refreshing = false;
        }
      );

  }
  onDeleteUser(user: User) {
    this.subs.sink = this.userService.deleteUser(user.id)
      .subscribe(
        (response: CustomHttpResponse) => {
          this.getUsers(false);
          //this.notificationService.notify(NotificationType.SUCCESS, response.message);
        },
        (errorResponse: HttpErrorResponse) => {
          //this.notificationService.notify(NotificationType.ERROR, errorResponse.error.message);
        }
      );
  }





}
