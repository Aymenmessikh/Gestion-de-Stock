import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Client } from 'src/app/Classes/Client';
import { TopClient } from 'src/app/Classes/TopClient';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  public ajouteClient(client: Client): Observable<Client> {
    return this.http.post<Client>(`${this.apiServerUrl}/client/save`,client)
  }
  public getClients(): Observable< Client[]> {
    return this.http.get< Client[]>(`${this.apiServerUrl}/client/getAll`)
  }
  public SuprimmerClient(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/client/delete/${id}`)
  }
  public addimage(image:FormData,mail:string,context:string):Observable<any>{
    return this.http.post<any>(`${this.apiServerUrl}/photo/save/${mail}/${context}`,image);
  }
  public getimage(name: string): Observable<any> {
    return this.http.get(`${this.apiServerUrl}/photo/get/${name}`, { responseType: 'blob' });
  }
  public getbestClient(): Observable<TopClient[]> {
    return this.http.get<TopClient[]>(`${this.apiServerUrl}/client/getAlll`);
  }

}
