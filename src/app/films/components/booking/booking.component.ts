import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  options = ['N/A', 'Selected', 'occupid', 'VIP'];
  colors = ['#fc5', 'green', '#45c', 'yellow'];
  sel = new Array(); //Ticket Selected
  ids = new Array();
  data: any;
  id: any;
  nTicket = 0;
  nSnackMern = 0;
  nSoftDrink = 0;
  number = 0;
  nPopCorn = 0;
  pTicket = 0;
  pSnackMern = 0;
  pSoftDrink= 0;
  pPopCorn = 0;
  totalSnacks = 0;
  total = 0;
  naEqule=0;
  
  constructor(private f: FilmService, private router: ActivatedRoute,private route:Router) {
    // this.f.booking;
  }

  ngOnInit(): void {
    
    this.id = this.router.snapshot.params['id'];
    //set data of film with id 
    this.data = this.f.setAllFilms()[this.id - 1];
    //set length of not allocated seats
    this.naEqule=this.f.setAllSeats[this.id-1].na.length;
    //set color to the seat
    this.setColor(this.f.setAllSeats[this.id - 1].na,this.sel,this.f.setAllSeats[this.id - 1].occ,this.f.setAllSeats[this.id - 1].vip);
  }

  goToTicketOverview(){
    if(this.nTicket==this.sel.length&&this.nTicket!=0){
      this.f.bookingDetails.filmId=this.id;
      this.f.bookingDetails.filmName=this.f.setAllFilms()[this.id-1].title    
      this.f.bookingDetails.date=this.f.setAllFilms()[this.id-1].date;
      this.f.bookingDetails.numberTichet=this.nTicket;
      this.f.bookingDetails.totalSalary=this.total; 
      // console.log("booking before")
      // console.log(this.f.booking);
      // this.f.booking.push(this.f.bookingDetailsData());
      // console.log("booking after")
      // console.log(this.f.booking)
   
        // localStorage.setItem('alldata',JSON.stringify(this.f.bookingData()));

this.f.addBooking();
      // localStorage.setItem('bookingDetails',JSON.stringify(this.f.bookingDetails));
      this.route.navigate(['/ticketOverview/',  this.id])
    }
  }
  setColor(
    na: Array<number>,
    sel: Array<number>,
    occ: Array<number>,
    vip: Array<number>
  ) {
    for (let m = 1; m <= 36; m++) {
      for (let opt1 of this.f.setAllSeats[this.id - 1].na) {
        if (m == opt1) {
          this.ids.push(0);
        }
      }
      for (let opt2 of this.sel) {
        if (opt2 == m) {
          this.ids.push(1);
        }
      }
      for (let opt3 of this.f.setAllSeats[this.id - 1].occ) {
        if (opt3 == m) {
          this.ids.push(2);
        }
      }
      for (let opt4 of this.f.setAllSeats[this.id - 1].vip) {
        if (opt4 == m) {
          this.ids.push(3);
        }
      }
    }
  }

  addOne(num: any, i: number) {
    switch (i) {
      case 1: {
        if (+num.innerHTML < this.f.setAllSeats[this.id - 1].na.length)
          this.nTicket++;
        this.pTicket = this.nTicket * 125;
        break;
      }
      case 2: {
        this.nSoftDrink++;
        this.pSoftDrink = this.nSoftDrink * 25;
        break;
      }
      case 3: {
        this.nPopCorn++;
        this.pPopCorn = this.nPopCorn * 45;
        break;
      }
      case 4: {
        this.nSnackMern++;
        this.pSnackMern = this.nSnackMern * 99;
        break;
      }
    }
    this.calulate();
  }
  subOne(num: any, i: number) {
    if (+num.innerHTML > 0) {
      switch (i) {
        case 1: {
          this.nTicket--;
          this.pTicket -= 125;
          break;
        }
        case 2: {
          this.nSoftDrink--;
          this.pSoftDrink -= 25;
          break;
        }
        case 3: {
          this.nPopCorn--;
          this.pPopCorn -= 45;
          break;
        }
        case 4: {
          this.nSnackMern--;
          this.pSnackMern -= 99;
          break;
        }
      }
    }
    this.calulate();
  }

  calulate() {
    this.totalSnacks = this.pSoftDrink + this.pPopCorn + this.pSnackMern;
    this.total = this.totalSnacks + this.pTicket;
    
  }

  //select seat when number of ticket(nTicket)>0 and s is number of the seat
  selected(ntickt: any, s: any) {
    
    if (
      this.f.setAllSeats[this.id - 1].na.findIndex((i) => i == s.innerHTML) !=-1 &&
      ntickt.innerHTML > 0 &&
      this.sel.length < ntickt.innerHTML &&
      this.sel.findIndex((j) => j == s.innerHTML) == -1
    ) {
      this.sel.push(+s.innerHTML);
      console.log('push', this.sel);
      this.f.setAllSeats[this.id - 1].occ.push(+s.innerHTML);
      this.f.setAllSeats[this.id - 1].na = this.f.setAllSeats[
        this.id - 1
      ].na.filter((i) => i != s.innerHTML);
      console.log('push', this.f.setAllSeats[this.id - 1].occ);
      s.style.backgroundColor = this.colors[1];
    } else if (
      this.f.setAllSeats[this.id - 1].na.findIndex((i) => i == s.innerHTML) ==
        -1 &&
      this.sel.findIndex((j) => j == s.innerHTML) != -1
    ) {
      this.sel = this.sel.filter((i) => i != s.innerHTML);
      this.f.setAllSeats[this.id - 1].occ = this.f.setAllSeats[
        this.id - 1
      ].occ.filter((i) => i != s.innerHTML);
      this.f.setAllSeats[this.id - 1].na.push(+s.innerHTML);
      s.style.backgroundColor = this.colors[0];
    }
    //save seat number of booking
    this.f.bookingDetails.seatNumber=this.sel;
  }
}
