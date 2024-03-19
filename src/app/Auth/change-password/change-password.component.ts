import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChangePasswordRequest } from 'src/app/Classes/ChangePasswordRequest';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  changeForm:FormGroup|any;
  Passwordrequest!:ChangePasswordRequest;
  constructor(private service:UserService,private route:Router,private notification:ToastrService){
    this.changeForm=new FormGroup({
      currentPassword:new FormControl('',Validators.required),
      newPassword:new FormControl('',Validators.required),
      ConfPassword:new FormControl('',Validators.required)
    });
    this.Passwordrequest={
      currentPassword:"",
      newPassword:"",
    }
  }
  public changePassword() {
    if (this.changeForm.get("ConfPassword").value != this.changeForm.get('newPassword').value) {
      this.notification.info("Ajouter la meme Password")
    } else {
      this.Passwordrequest.currentPassword = this.changeForm.get("currentPassword").value;
      this.Passwordrequest.newPassword = this.changeForm.get("newPassword").value;
      this.service.changePassword(this.Passwordrequest).subscribe(response => {
          this.notification.success('Password est Changer')
          this.route.navigate(["/dash/profile"])
        },
        (errors) => {
          this.notification.error("Current Password est Faux")
        }
      )
    }
  }
}
