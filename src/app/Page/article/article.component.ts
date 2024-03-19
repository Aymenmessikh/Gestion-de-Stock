import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Classes/Article';
import { ArticleService } from 'src/app/Service/Article/article.service';
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
  constructor(private service:ArticleService,private notification:ToastrService) {
  }
  article!:Article[];
  page:number=1;
  totalLength:any;
  public getArticle():void{
    this.service.getArticle().subscribe(response=>{
      this.article=response;
    },(errors)=>{
      this.notification.error('FAILD')
      }
    )
  }
  public suprimmer(id:number){
    this.service.SuprimmerArticle(id).subscribe(response=>{
      this.notification.success("Article Suprimmer")
      this.getArticle()
    },(errors)=>{
      this.notification.error("FAILD")
    }
    )
  }
    ngOnInit(): void {
        this.getArticle()
    }
  public searchEmployees(key: string): void {
    console.log(key);
    const results: Article[] = [];
    for (const articles of this.article) {
      if (articles.designation.toLowerCase().indexOf(key.toLowerCase()) !== -1)
      {
        results.push(articles);
      }
    }
    this.article = results;
    if (results.length === 0 || !key) {
      this.getArticle();
    }
  }

}
