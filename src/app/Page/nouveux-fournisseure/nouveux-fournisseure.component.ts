import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { address } from 'src/app/Classes/Address';
import { Fournisseure } from 'src/app/Classes/Fournisseure';
import { FournisseureService } from 'src/app/Service/Fournisseure/fournisseure.service';

@Component({
  selector: 'app-nouveux-fournisseure',
  templateUrl: './nouveux-fournisseure.component.html',
  styleUrls: ['./nouveux-fournisseure.component.css']
})
export class NouveuxFournisseureComponent {
  four!:Fournisseure;
  fourForm:FormGroup|any;
  address!:address;
  constructor(private service:FournisseureService,private notification:ToastrService) {
    this.fourForm=new FormGroup({
      Nom:new FormControl('',Validators.required),
      prenom:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      nemTel:new FormControl('',Validators.required),
      codePostal:new FormControl('',Validators.required),
      ville:new FormControl('',Validators.required),
      pays:new FormControl('',Validators.required),
      address:new FormControl('',Validators.required)
    })
    this.four={
      id:0,
      nemTel:'',
      nome:'',
      mail:'',
      pronome:'',
      adresse:{
        ville:'',
        paye:'',
        adresse:'',
        codePostal:0
      }
    }
  }
  public ajouterFournisseure(){
    this.four.nome=this.fourForm.get('Nom').value;
    this.four.pronome=this.fourForm.get('prenom').value;
    this.four.mail=this.fourForm.get('email').value;
    this.four.nemTel=this.fourForm.get('nemTel').value;
    this.four.adresse.adresse=this.fourForm.get('address').value;
    this.four.adresse.ville=this.fourForm.get('ville').value;
    this.four.adresse.paye=this.fourForm.get('pays').value;
    this.four.adresse.codePostal=this.fourForm.get('codePostal').value;
    console.log(this.four)
    this.service.ajouteFour(this.four).subscribe(response=>{
        this.four=response;
        this.notification.success('Client Ajouter')
      this.fourForm.reset();
      },(errors)=>{
        this.notification.error('FAILD')
      }
    )
  }
}
