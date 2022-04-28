import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontoffice-components/header/header.component';
import { HomeComponent } from './frontoffice-components/home/home.component';
import { CompaniesComponent } from './frontoffice-components/companies/companies.component';
import { CompanyProfileComponent } from './frontoffice-components/company-profile/company-profile.component';
import { ForumComponent } from './frontoffice-components/forum/forum.component';
import { ForumPostViewComponent } from './frontoffice-components/forum-post-view/forum-post-view.component';
import { TripsComponent } from './frontoffice-components/trips/trips.component';
import { MessagesComponent } from './frontoffice-components/messages/messages.component';
import { MyProfileFeedComponent } from './frontoffice-components/my-profile-feed/my-profile-feed.component';
import { ProfileAccountSettingsComponent } from './frontoffice-components/profile-account-settings/profile-account-settings.component';
import { ProfilesComponent } from './frontoffice-components/profiles/profiles.component';
import { SignInComponent } from './frontoffice-components/sign-in/sign-in.component';
import { UserProfileComponent } from './frontoffice-components/user-profile/user-profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NotificationModule } from './notification/notification.module';
import {ComplaintComponent} from "./frontoffice-components/complaint/complaint.component";
import {AllComplaintComponent} from "./frontoffice-components/all-complaint/all-complaint.component";
import {RecaptchaModule} from "ng-recaptcha";
import { DetailsReclamComponent } from './frontoffice-components/details-reclam/details-reclam.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompaniesComponent,
    CompanyProfileComponent,
    ForumComponent,
    ComplaintComponent,
    AllComplaintComponent,
    ForumPostViewComponent,
    TripsComponent,
    MessagesComponent,
    MyProfileFeedComponent,
    ProfileAccountSettingsComponent,
    ProfilesComponent,
    SignInComponent,
    UserProfileComponent,
    LoginComponent,
    DetailsReclamComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NotificationModule,
    RecaptchaModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],  bootstrap: [AppComponent]
})
export class AppModule { }
