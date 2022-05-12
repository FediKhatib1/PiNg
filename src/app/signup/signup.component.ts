import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from '../model/user';
import { NotificationType } from '../notification/notification-type';
import { AuthenticationService } from '../services/authentication.service';
import {Router} from "@angular/router";
import { NotificationService } from '../services/notification.service';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
    test : Date = new Date();
    focus;
    focus1;
    focus2;
    public showLoading: boolean;
    private subscriptions: Subscription[] = [];
    constructor(private authenticationService: AuthenticationService,
      private router: Router,
      private notificationService: NotificationService,) { }

    ngOnInit() {}
    public onRegister(user: User) {
        this.showLoading = true;
    
        let subscription = this.authenticationService
          .register(user)
          .subscribe(user => {
              this.notificationService.notify(NotificationType.SUCCESS, `A new account was created for ${user.firstName}.
              Please check your email for password to log in`);
              this.router.navigateByUrl('#');
              this.showLoading = false;
            },
            (errorResponse: HttpErrorResponse) => {
              //this.sendErrorNotification(errorResponse.error.message);
              this.showLoading = false;
            }
          );
    
        this.subscriptions.push(subscription);
      }
      ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
      }
}
