import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fournisseure } from 'src/app/Classes/Fournisseure';
import { environment } from 'src/envirment/environment';

@Injectable({
  providedIn: 'root'
})
export class FournisseureService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private http:HttpClient) { }
  public ajouteFour(fournisseure:Fournisseure): Observable<Fournisseure> {
    return this.http.post<Fournisseure>(`${this.apiServerUrl}/fournisseure/save`,fournisseure)
  }
  public getFournniseurs(): Observable<Fournisseure[]> {
    return this.http.get<Fournisseure[]>(`${this.apiServerUrl}/fournisseure/getAll`)
  }
  public SuprimmerFour(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/fournisseure/delete/${id}`)
  }
}
