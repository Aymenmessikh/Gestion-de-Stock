import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Classes/Article';
import { ArticleService } from 'src/app/Service/Article/article.service';

@Component({
  selector: 'app-art-by-cat',
  templateUrl: './art-by-cat.component.html',
  styleUrls: ['./art-by-cat.component.css']
})
export class ArtByCatComponent implements OnInit{
  constructor(private routes:ActivatedRoute,private service:ArticleService,private notification:ToastrService) {
  }
  article!:Article[];
  id!:number;
  public getArticlebyCategorie():void{
    this.service.getArticlebyCategorie(this.id).subscribe(response=>{
        this.article=response;
      },(errors)=>{
        this.notification.error('FAILD')
      }
    )
  }
  public suprimmer(id:number){
    this.service.SuprimmerArticle(id).subscribe(response=>{
        this.notification.success("Article Suprimmer")
        this.getArticlebyCategorie()
      },(errors)=>{
        this.notification.error("FAILD")
      }
    )
  }
  ngOnInit(): void {
    this.routes.params.subscribe(params =>{
      this.id=params['id'];
    })
    this.getArticlebyCategorie()
  }
}
