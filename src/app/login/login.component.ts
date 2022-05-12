import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
import {NotificationService} from "../services/notification.service";
import {NotificationType} from "../notification/notification-type";
import {Subscription} from "rxjs";
import {UserLogin} from "../dto/user-login";
import {HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {User} from "../model/user";
import {HeaderType} from "../enum/header-type.enum";
import { UserService } from '../services/user.service';
import { Role } from '../enum/role.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  public showLoading: boolean;
  private subscriptions: Subscription[] = [];
  public user:any;

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    if (this.authenticationService.isUserLoggedIn()) {
      this.router.navigate(["/management", "users"]);
      this.notificationService.notify(NotificationType.INFO, "You are already logged in");
    }
  }

  public onLogin(userLogin: UserLogin): void {
    this.showLoading = true;

    let subscription = this.authenticationService
      .login(userLogin)
      .subscribe((response: HttpResponse<User>) => {

          const token = response.headers.get(HeaderType.JWT_TOKEN);
          this.authenticationService.saveToken(token!);

          this.authenticationService.addUserToLocalStorage(response.body!);
          
          if(this.authenticationService.isLoggedUserHasRoleAdmin())
          {this.router.navigateByUrl('/admin');}
          else
          this.router.navigateByUrl('/landing');
          this.showLoading = false;
        },
        (errorResponse: HttpErrorResponse) => {
          this.sendErrorNotification(errorResponse.error.message);
          this.showLoading = false;
        }
      );

    this.subscriptions.push(subscription);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private sendErrorNotification(message: string) {
    this.notificationService.notify(NotificationType.ERROR, message ? message : 'An error occurred. Please try again')
  }
}
