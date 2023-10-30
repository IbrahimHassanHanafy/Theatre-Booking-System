import { Injectable } from '@angular/core';
import { Register } from 'src/app/classes/register';
import { FilmService } from 'src/app/films/services/film.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginRegister=false; //disabled home component if not register or admin
  profileRegister=false; //disabled profile component if not register
  registerData=localStorage.getItem('registerdata')!=null?JSON.parse(localStorage['registerdata']):{
    userName:'admin',
    fullName:{
      firstName:'admin',
      lastName:'admin',
    },
    password:'abc1235',
    email:'admin@gmail.com',
    phone:'01122334455'
  };
  constructor(private films:FilmService) { }
 
  data(profileData:any){
   
    this.registerData=profileData
    localStorage.setItem('registerdata',JSON.stringify(this.registerData))
  }
  logoutAuth(){
    this.loginRegister=false;
    this.profileRegister=false;
    localStorage.removeItem('registerdata');
    localStorage.removeItem('alldata');
    this.films.booking=new Array();
  }
}
