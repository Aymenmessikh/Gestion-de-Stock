import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegistreRequest } from 'src/app/Classes/RegistreRequest';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit{
  registreRequest!:RegistreRequest;
  registreForm:FormGroup|any;
  password1!:string;
  image:string="assets/Man_Silhouette.png"
  password2!:string;
  constructor(private service:UserService,private route:Router,private notification:ToastrService) {
    this.registreForm =new FormGroup({
      nom:new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',Validators.required),
      passwordC: new FormControl('',Validators.required),
      role: new FormControl('',Validators.required)
    })
    this.registreRequest={
      email:'',
      nom:'',
      role:'',
      password:'',
      prenom:'',
    }
  }
  public registre(){
    this.password1=this.registreForm.get('password').value;
    this.password2=this.registreForm.get('passwordC').value;
    if (this.password1==this.password2){
     this.registreRequest.email=this.registreForm.get('email').value;
     this.registreRequest.password=this.registreForm.get('password').value;
     this.registreRequest.nom=this.registreForm.get('nom').value;
     this.registreRequest.prenom=this.registreForm.get('prenom').value;
     this.registreRequest.role=this.registreForm.get('role').value;
     if (this.registreForm.valid){
       this.service.registre(this.registreRequest).subscribe(response=>
       {
         console.log(response);
         this.notification.success("Inscription Successful")
         this.route.navigate(['']);
       },(error)=>{
          this.notification.error('Changer Email')
         }
       )
     }
    }
    else {
      this.notification.info('SVP ENTRER LE SAME PASSWORD')
    }
    console.log(this.registreForm)
  }

    ngOnInit(): void {

    }

}
