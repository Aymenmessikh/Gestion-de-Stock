import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/Classes/Article';
import { Categorie } from 'src/app/Classes/Categorie';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  public ajouteArticle(article: Article): Observable< Article> {
    return this.http.post< Article>(`${this.apiServerUrl}/article/save`,article)
  }
  public getArticle(): Observable< Article[]> {
    return this.http.get< Article[]>(`${this.apiServerUrl}/article/getAll`)
  }
  public getArticlebyCategorie(id:number): Observable< Article[]> {
    return this.http.get< Article[]>(`${this.apiServerUrl}/article/getArticleByCategorie/${id}`)
  }
  public SuprimmerArticle(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/article/deletarticle/${id}`)
  }
}
