import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { address } from 'src/app/Classes/Address';
import { Client } from 'src/app/Classes/Client';
import { ClientService } from 'src/app/Service/Client/client.service';

@Component({
  selector: 'app-nouveux-client',
  templateUrl: './nouveux-client.component.html',
  styleUrls: ['./nouveux-client.component.css']
})
export class NouveuxClientComponent{
  client!:Client;
  clientForm:FormGroup|any;
  address!:address;
  image:string="assets/Man_Silhouette.png"
  constructor(private service:ClientService,private notification:ToastrService) {
    this.clientForm=new FormGroup({
      Nom:new FormControl('',Validators.required),
      prenom:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      nemTel:new FormControl('',Validators.required),
      codePostal:new FormControl('',Validators.required),
      ville:new FormControl('',Validators.required),
      pays:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required),
      image:new FormControl('',Validators.required),
    })
    this.client={
      id:0,
      nemTel:'',
      nome:'',
      mail:'',
      photoName:"",
      photoData:"",
      pronome:'',
      adresse:{
        ville:'',
        paye:'',
        adresse:'',
        codePostal:0
      }
    }
    }
  public ajouterClient(){
    this.client.nome=this.clientForm.get('Nom').value;
    this.client.pronome=this.clientForm.get('prenom').value;
    this.client.mail=this.clientForm.get('email').value;
    this.client.nemTel=this.clientForm.get('nemTel').value;
    this.client.adresse.adresse=this.clientForm.get('address').value;
    this.client.adresse.ville=this.clientForm.get('ville').value;
    this.client.adresse.paye=this.clientForm.get('pays').value;
    this.client.adresse.codePostal=this.clientForm.get('codePostal').value;
    console.log(this.client)
    this.service.ajouteClient(this.client).subscribe(response=>{
      this.client=response;
      this.addimage(this.client.mail)
      this.notification.success('Client Ajouter')
      this.clientForm.reset();
    },(errors)=>{
      this.notification.error('Email Existe')
      this.notification.info("Changer Email")
      }
    )
  }
  selectdimage!:File;
  context:string="client";
  fileselect(event:any){
    this.selectdimage=event.target.files[0];
  }
  addimage(mail:string) {
    const formData = new FormData();
    formData.append("image", this.selectdimage);
    this.service.addimage(formData, mail, this.context).subscribe(
      (response) => {
      },
      (error) => {
        console.error("Error:", error);
      }
    );
  }
}
