import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmsRoutingModule } from './films-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { MyHistoryComponent } from './components/my-history/my-history.component';
import { FilmDetailsComponent } from './components/film-details/film-details.component';
import { BookingComponent } from './components/booking/booking.component';
import { TicketOverviewComponent } from './components/ticket-overview/ticket-overview.component';
import { ParcodeComponent } from './components/parcode/parcode.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    HomeComponent,
    MyHistoryComponent,
    FilmDetailsComponent,
    BookingComponent,
    TicketOverviewComponent,
    ParcodeComponent,
    
  ],
  imports: [
    CommonModule,
    FilmsRoutingModule,
    FormsModule

  ]
})
export class FilmsModule { }
