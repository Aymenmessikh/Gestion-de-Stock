import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {catchError, Observable, throwError } from 'rxjs';
import { Categorie } from 'src/app/Classes/Categorie';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  public ajouteCategorie(categorie: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(`${this.apiServerUrl}/categorie/save`,categorie)
  }
  public getCategorie(): Observable<Categorie[]> {
    return this.http.get<Categorie[]>(`${this.apiServerUrl}/categorie/getAll`)
  }
  public SuprimmerCategorie(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/categorie/delete/${id}`)
  }

}
