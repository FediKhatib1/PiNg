import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './frontoffice/landing/landing.component';
import { ProfileComponent } from './frontoffice/profile/profile.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { HomeModule } from './frontoffice/home/home.module';
import { LoginComponent } from './login/login.component';
import { AuthenticationGuard } from './guard/authentication.guard';
import { AuthenticationService } from './services/authentication.service';
import { UserService } from './services/user.service';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { NotificationModule } from './notification/notification.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StatModule } from './backoffice/shared/modules/stat/stat.module';
import {ChatComponent} from './frontoffice/chat/chat.component';
import {ChattingComponent} from './frontoffice/chatting/chatting.component';
import {ChatboxComponent} from './frontoffice/chatbox/chatbox.component';
import {ChatpanelComponent} from './frontoffice/chatpanel/chatpanel.component';
import {MaterialModule} from './material.module';
import {NoAccessComponent} from './frontoffice/no-access/no-access.component';
import {QuizComponent} from './frontoffice/quiz-game/quiz/quiz.component';
import {BackgroundDirective} from './frontoffice/quiz-game/background.directive';
import {MeetingComponent} from './frontoffice/meeting/meeting.component';
import {CallInfoDialogComponents} from './frontoffice/meeting/dialog/callinfo-dialog.component';
import { NgChartsModule } from 'ng2-charts';


// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
  return new TranslateHttpLoader(
      http,
      '/start-javascript/sb-admin-material/master/dist/assets/i18n/',
      '.json'
  );*/
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    MeetingComponent,
    CallInfoDialogComponents,
    NavbarComponent,
    FooterComponent,
    ChatComponent,
    ChattingComponent,
    ChatboxComponent,
    ChatpanelComponent,
    LoginComponent,
    QuizComponent,
    NoAccessComponent,
    BackgroundDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    PickerModule,
    HttpClientModule,
    NotificationModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    OverlayModule,
    HttpClientModule,
    StatModule,
    FlexLayoutModule,
    NgChartsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    MaterialModule
  ],
  providers: [AuthenticationGuard, AuthenticationService, UserService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
