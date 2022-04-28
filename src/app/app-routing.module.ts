import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './frontoffice-components/companies/companies.component';
import { MyProfileFeedComponent } from './frontoffice-components/my-profile-feed/my-profile-feed.component';
import { SignInComponent } from './frontoffice-components/sign-in/sign-in.component';
import { TripsComponent } from './frontoffice-components/trips/trips.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path : 'company', component : CompaniesComponent},
  {path:'trips',component:TripsComponent},
  {path : 'myProfileFeed', component : MyProfileFeedComponent},
  {path : 'login' , component : LoginComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
