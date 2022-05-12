import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './frontoffice/home/home.component';
import { ProfileComponent } from './frontoffice/profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './frontoffice/landing/landing.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './backoffice/layout/dashboard/dashboard.component';
import { LayoutModule } from './backoffice/layout/layout.module';
import { Screen1Component } from './backoffice/layout/screen1/screen1.component';
import { TripfrontComponent } from './frontoffice/tripfront/tripfront.component';
import { EventfrontComponent } from './frontoffice/eventfront/eventfront.component';
import { EventdetailsffrontComponent } from './frontoffice/eventdetailsffront/eventdetailsffront.component';

const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },
    { path: 'tripfront',          component: TripfrontComponent },
    { path: 'eventfront',          component: EventfrontComponent },
    { path: 'eventfront/:id',          component: EventdetailsffrontComponent },
    { path: 'screen1',          component: Screen1Component },
    {
      path: 'admin',
      loadChildren: ()=>LayoutModule 
  },
   // { path: 'dashboard',          component: DashboardComponent },
    { path: 'login',          component: LoginComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
    
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
