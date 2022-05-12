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
import {ChattingComponent} from './frontoffice/chatting/chatting.component';
import {ChatboxComponent} from './frontoffice/chatbox/chatbox.component';
import {ChatComponent} from './frontoffice/chat/chat.component';
import {NoAccessComponent} from './frontoffice/no-access/no-access.component';
import {QuizComponent} from './frontoffice/quiz-game/quiz/quiz.component';
import {MeetingComponent} from './frontoffice/meeting/meeting.component';


const routes: Routes =[
    { path: 'home',             component: HomeComponent },
    {path: 'block', component: NoAccessComponent},
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',           component: SignupComponent },
    { path: 'landing',          component: LandingComponent },

    {path: 'aaa', component: ChattingComponent},
    {path: 'chatting', component: ChatboxComponent},
    {path: 'chat', component: ChatComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'meet', component: MeetingComponent},
    {
      path: 'admin',
      loadChildren: ()=>LayoutModule
  },
    { path: 'dashboard',          component: DashboardComponent },
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
