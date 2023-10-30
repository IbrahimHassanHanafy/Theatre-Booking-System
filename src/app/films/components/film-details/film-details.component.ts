import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  constructor(private router:ActivatedRoute,private f:FilmService) { }
  film:any;
  date:boolean=false;
  id=this.router.snapshot.params['id'];
  booking=""
  dayAndTime=["sat , dec 12",'sun , dec 13','mon , dec 14','tus , dec 15','wen , dec 16','thu , dec 17','fri, dec 18'];
  
  ngOnInit(): void {
 
    this.film=this.f.setAllFilms()[this.id-1]
    this.booking='/booking/'+this.id;
    // console.log(this.router.snapshot.params['id']) -----> 1
    // console.log(this.film)            --------> object
  }
  display(e:any){
    if((e.value)==this.dayAndTime[this.id]){
      this.date=true;
 
    }else{
      this.date=false
    }

  }
  

}
