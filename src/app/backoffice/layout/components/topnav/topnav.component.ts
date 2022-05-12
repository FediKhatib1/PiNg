import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/model/user';
import { NotificationType } from 'src/app/notification/notification-type';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-topnav',
    templateUrl: './topnav.component.html',
    styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
    public pushRightClass: string;
    users : User[]
    public showLoading: boolean;
    private subscriptions: Subscription[] = [];

    constructor(public router: Router, private translate: TranslateService,private userService: UserService,
        private notificationService: NotificationService,
        private authenticationService: AuthenticationService,) {
        this.router.events.subscribe(val => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        this.pushRightClass = 'push-right';
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
        this.router.navigate(['/login']);
    }
    onLogOut() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
        this.notificationService.notify(NotificationType.SUCCESS, 'You have been successfully logged out');
      }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
