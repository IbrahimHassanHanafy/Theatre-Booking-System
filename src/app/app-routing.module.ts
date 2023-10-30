import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { BookingComponent } from './films/components/booking/booking.component';
import { FilmDetailsComponent } from './films/components/film-details/film-details.component';
import { HomeComponent } from './films/components/home/home.component';
import { MyHistoryComponent } from './films/components/my-history/my-history.component';
import { ParcodeComponent } from './films/components/parcode/parcode.component';
import { ProfileComponent } from './films/components/profile/profile.component';
import { TicketOverviewComponent } from './films/components/ticket-overview/ticket-overview.component';

const routes: Routes = [
  {
    path:'' ,component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path:"profile",component:ProfileComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'myHistory',component:MyHistoryComponent
  },{
    path:'film-details/:id',component:FilmDetailsComponent
  }
  ,
  {
    path:'ticketOverview/:id',component:TicketOverviewComponent
  },
  {
    path:'booking/:id',component:BookingComponent
  },
  {
    path:'parcode' ,component:ParcodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
