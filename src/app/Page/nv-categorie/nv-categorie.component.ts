import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from 'src/app/Classes/Categorie';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';

@Component({
  selector: 'app-nv-categorie',
  templateUrl: './nv-categorie.component.html',
  styleUrls: ['./nv-categorie.component.css']
})
export class NvCategorieComponent {
  cateGroup:FormGroup|any;
  categorie!:Categorie;
  constructor(private service:CategorieService,private notification:ToastrService) {
    this.cateGroup=new FormGroup({
      codeCategorie:new FormControl("",Validators.required),
      designation:new FormControl("",Validators.required)
    })
    this.categorie={
      designation:"",
      codeCategorie:"",
      id:0,
    }
  }
  public save(){
    this.categorie.codeCategorie=this.cateGroup.get("codeCategorie").value;
    this.categorie.designation=this.cateGroup.get("designation").value;
    if (this.cateGroup.valid){
      this.service.ajouteCategorie(this.categorie).subscribe(
        rsponse=>{
          this.notification.success('Categorie Ajouter')
          this.cateGroup.reset();
        },(errors)=>{
          this.notification.error("FAILD")
      }
      )
    }
  }
}
