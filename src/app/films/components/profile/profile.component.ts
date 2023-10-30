import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  data={
    userName:'',
    fullName:{
      firstName:'',
      lastName:'',
    },
    password:'',
    email:'',
    phone:'',
  };
  constructor(private service:AuthService) { }

  ngOnInit(): void {

    if(this.service.registerData!=undefined){
      this.data=this.service.registerData
    }

  }

}
