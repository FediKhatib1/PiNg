import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaniesComponent } from './frontoffice-components/companies/companies.component';
import { MyProfileFeedComponent } from './frontoffice-components/my-profile-feed/my-profile-feed.component';
import { SignInComponent } from './frontoffice-components/sign-in/sign-in.component';
import { TripsComponent } from './frontoffice-components/trips/trips.component';
import { LoginComponent } from './login/login.component';
import {AllComplaintComponent} from "./frontoffice-components/all-complaint/all-complaint.component";
import {ComplaintComponent} from "./frontoffice-components/complaint/complaint.component";
import {DetailsReclamComponent} from "./frontoffice-components/details-reclam/details-reclam.component";

const routes: Routes = [
  {path : 'company', component : CompaniesComponent},
  {path : 'reclamation', component : ComplaintComponent},
  {path : 'allr', component : AllComplaintComponent},
  {path : 'allr/:id', component :DetailsReclamComponent},
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
