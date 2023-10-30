import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,DoCheck,OnChanges {

  constructor(private s:AuthService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.login=this.s.loginRegister
  }
  ngDoCheck(): void {
    this.login=this.s.loginRegister;
  }
login:any;
  ngOnInit(): void {
    this.login=this.s.loginRegister;
  }
  logout(){
    // this.login=!this.login
    console.log('before')
    console.log(this.s.loginRegister)
    this.s.logoutAuth();
    console.log('after')
    console.log(this.s.loginRegister)
    this.s.loginRegister?"/home":"/"


    
  }
  disableHome(){
    return this.s.loginRegister?"/home":"/"
    //go to home when register or login
  }
  disableProfile(){
    return this.s.profileRegister?"/profile":"/"
    //go to profile when register is done
  }

}
