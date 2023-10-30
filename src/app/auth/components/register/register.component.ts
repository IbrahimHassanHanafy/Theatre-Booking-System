import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { Register } from 'src/app/classes/register';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
// registerData=new Register('','','','','','');
  constructor(private rourter:Router,private serve:AuthService) { }

  ngOnInit(): void {
  }
  submitToHome(form:any){
    console.log(form.value)
    this.rourter.navigate(['/home'])
    // this.serve.data(this.registerData)
    this.serve.data(form.value)
    this.serve.loginRegister=true  
    this.serve.profileRegister=true  
  }


}
