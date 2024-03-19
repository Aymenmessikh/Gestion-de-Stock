import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Classes/Article';
import { Categorie } from 'src/app/Classes/Categorie';
import { ArticleService } from 'src/app/Service/Article/article.service';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';

@Component({
  selector: 'app-nouvel-article',
  templateUrl: './nouvel-article.component.html',
  styleUrls: ['./nouvel-article.component.css']
})
export class NouvelArticleComponent implements OnInit{
  categories!:Categorie[];
  articleForm:FormGroup|any;
  article!:Article;
  constructor(private catservice:CategorieService,private service:ArticleService,private notification:ToastrService) {
    this.articleForm=new FormGroup({
      designation:new FormControl('',Validators.required),
      codeArticle:new FormControl("",Validators.required),
      codeCategorie:new FormControl("",Validators.required),
      tauxtva:new FormControl("",Validators.required),
      prixUnitairHt:new FormControl("",Validators.required),
      prixUnitairTtc:new FormControl("",Validators.required)
    })
    this.article={
      id:0,
      designation:'',
      codeArticle:"",
      codeCategorie:"",
      tauxtva:0,
      prixUnitairHt:0,
      prixUnitairTtc:0
    }
  }
  public getCategories():void{
    this.catservice.getCategorie().subscribe(response=>{
        this.categories=response;
        console.log(response)
      },(errors)=>{
        console.log('errors')
      }
    )
  }
  public AjouterArticle(){
    this.article.codeArticle=this.articleForm.get("codeArticle").value;
    this.article.designation=this.articleForm.get('designation').value;
    this.article.codeCategorie=this.articleForm.get("codeCategorie").value;
    this.article.tauxtva=this.articleForm.get("tauxtva").value;
    this.article.prixUnitairHt=this.articleForm.get("prixUnitairHt").value;
    this.article.prixUnitairTtc=this.articleForm.get("prixUnitairTtc").value;
    this.service.ajouteArticle(this.article).subscribe(response=>{
      this.article=response;
      this.notification.success("Article Ajouter")
      this.articleForm.reset();
    },(errors)=>{
      this.notification.error("Faild")
    })
  }
    ngOnInit(): void {
      this.getCategories()
    }

}
