import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AfficherUtilisateure } from 'src/app/Classes/AfficherUtilisateure';
import { RegistreRequest } from 'src/app/Classes/RegistreRequest';
import { Utilisateure } from 'src/app/Classes/Utilisateure';
import { UserService } from 'src/app/Service/user.service';
import { UtlisateureService } from 'src/app/Service/Utlisateure/utlisateure.service';

@Component({
  selector: 'app-modifier-profile',
  templateUrl: './modifier-profile.component.html',
  styleUrls: ['./modifier-profile.component.css']
})
export class ModifierProfileComponent implements OnInit{
  registreRequest!:RegistreRequest;
  registreForm:FormGroup|any;
  user!: AfficherUtilisateure;
  token!: string;
  constructor(private service:UserService,private serviceB: UtlisateureService,private route:Router,private notification:ToastrService) {
    this.registreForm =new FormGroup({
      nom:new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      role: new FormControl('',Validators.required)
    })
    this.registreRequest={
      email:'',
      nom:'',
      role:"",
      password:'',
      prenom:'',
    }
  }
  public Modifier(){
      this.registreRequest.email=this.registreForm.get('email').value;
      this.registreRequest.nom=this.registreForm.get('nom').value;
      this.registreRequest.prenom=this.registreForm.get('prenom').value;
      this.registreRequest.role=this.registreForm.get('role').value;
      if (this.registreForm.valid){
        this.service.registre(this.registreRequest).subscribe(response=>
          {
            this.notification.success("Inscription Successful")
            this.route.navigate(['/dash/profile']);
          },(error)=>{
            this.notification.error('Changer Email')
          }
        )
      }
  }
  public getUser(token: string) {
    return this.serviceB.getUser(token).subscribe(respons => {
      this.user=respons;
      console.log(respons);
    });
  }

  ngOnInit(): void {
    this.token = localStorage.getItem('token') ?? '';

    this.getUser(this.token);
  }
}
