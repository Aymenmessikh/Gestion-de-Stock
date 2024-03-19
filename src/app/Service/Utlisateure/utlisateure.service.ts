import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { AfficherUtilisateure } from 'src/app/Classes/AfficherUtilisateure';
import { Utilisateure } from 'src/app/Classes/Utilisateure';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class UtlisateureService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) {}
  public getUser(token:string):Observable<AfficherUtilisateure>{
    return this.http.get<AfficherUtilisateure>(`${this.apiServerUrl}/utilisateure/getById/${token}`).pipe(map(data=>{
      localStorage.setItem('role',data.role);
      return data;
      })
    )
  }
}
