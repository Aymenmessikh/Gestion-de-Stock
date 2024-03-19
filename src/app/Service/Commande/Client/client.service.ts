import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from 'src/app/Classes/Article';
import { Client } from 'src/app/Classes/Client';
import { CmndClient } from 'src/app/Classes/cmnd-client';
import { LigneCmndClient } from 'src/app/Classes/LigneCmndClient';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  public ajouterCmnd(cmndClient:CmndClient): Observable<CmndClient>{
    return this.http.post<CmndClient>(`${this.apiServerUrl}/cmndClient/save`,cmndClient)
  }
  public getCommand():Observable<CmndClient[]>{
    return this.http.get<CmndClient[]>(`${this.apiServerUrl}/cmndClient/gatAll`)
  }
  public suprimmerCommand(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/cmndClient/delete/${id}`)
  }
  public getLigneComandeClients(id:number): Observable<LigneCmndClient[]> {
    return this.http.get<LigneCmndClient[]>(`${this.apiServerUrl}/cmndClient/getbyCmnd/${id}`)
  }
  public getComandeClients(id:number): Observable<CmndClient> {
    return this.http.get<CmndClient>(`${this.apiServerUrl}/cmndClient/getbyid/${id}`)
  }
  public getClients(mail:string): Observable< Client> {
    return this.http.get< Client>(`${this.apiServerUrl}/client/getByEmail/${mail}`)
  }
  public getArticle(codeArticle:string): Observable<Article> {
    return this.http.get<Article>(`${this.apiServerUrl}/article/getarticlebycode/${codeArticle}`)
  }
}
