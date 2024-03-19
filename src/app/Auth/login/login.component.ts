import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginRequest } from 'src/app/Classes/loginRequest';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginRequest!:LoginRequest;
  loginForm:FormGroup|any;
  constructor(private service:UserService,private route:Router,private notification:ToastrService){
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required, Validators.email]),
      password:new FormControl('',Validators.required)
    });
    this.loginRequest={
      email:'',
      password:''
    }
    localStorage.clear()
  }
  public login(){
    this.loginRequest.email=this.loginForm.get('email').value;
    this.loginRequest.password=this.loginForm.get('password').value;
    if (this.loginForm.valid){
      this.service.login(this.loginRequest).subscribe(
        (response) => {
          localStorage.setItem('token',response.token);
          this.notification.success("Login Successful");
          this.route.navigate(['/dash']);
        },
        (error) => {
          console.error(error);
          this.notification.error('Login Failed');
        }
      );
    }
  }
    ngOnInit(): void {

    }

}
