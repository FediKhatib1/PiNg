import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
import { ChartsModule } from 'ng2-charts';



import { MatInputModule } from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin!

import {MatSelectModule} from '@angular/material/select';


import { TripComponent } from './backoffice/trip/trip.component'
import { AddDialogComponent } from './backoffice/dialogs/add/add.dialog.component';
import { DeleteDialogComponent } from './backoffice/dialogs/delete/delete.dialog.component';
import { EditDialogComponent } from './backoffice/dialogs/edit/edit.dialog.component';

import { TripService } from './backoffice/services/tripservice.service';
import { SnackBarService } from './backoffice/services/snack-bar.service';
import { MaterialModule } from './backoffice/shared/modules/material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatModule } from './backoffice/shared/modules/stat/stat.module';

import { EventComponent } from './backoffice/event/event.component';
import { TripfrontComponent } from './frontoffice/tripfront/tripfront.component';
import { EventService } from './backoffice/services/eventservice.service';
import { AddeventComponent } from './backoffice/dialogEvent/addevent/addevent.component';
import { EveComponent } from './backoffice/eve/eve.component';
import { MarkerService } from './marker.service';
import { EventcalComponent } from './backoffice/eventcal/eventcal.component';
import { EventfrontComponent } from './frontoffice/eventfront/eventfront.component';
import { EventdetailsffrontComponent } from './frontoffice/eventdetailsffront/eventdetailsffront.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
//import { appendFile } from 'fs';



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
FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,interactionPlugin
 
]);
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,TripComponent,AddDialogComponent,
    DeleteDialogComponent,
    EditDialogComponent,
    AddeventComponent,
    EventComponent,
    TripfrontComponent,
    EveComponent,
    EventcalComponent,
    EventfrontComponent,
    EventdetailsffrontComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    HttpClientModule,
    NotificationModule,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    OverlayModule,
    HttpClientModule,
    StatModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    OverlayModule,
    HttpClientModule,
    MaterialModule,
    MatPaginatorModule,  MatTableModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatPaginatorModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    FlexLayoutModule,
    StatModule,
    ChartsModule,
    NgxQRCodeModule,
    QRCodeModule,
    
    FullCalendarModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
        }
    })
  ],
  providers: [AuthenticationGuard, AuthenticationService, UserService,TripService,SnackBarService,EventService,MarkerService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
