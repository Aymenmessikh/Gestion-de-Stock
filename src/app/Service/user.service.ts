import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../Classes/loginRequest';
import { LoginResponse } from '../Classes/loginResponse';
import {LocalStorageService} from "ngx-webstorage";
import { map, Observable } from 'rxjs';
import { RegistreRequest } from '../Classes/RegistreRequest';
import { ChangePasswordRequest } from '../Classes/ChangePasswordRequest';
import { environment } from 'src/envirment/environment';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private  apiServerUrl=environment.apiUrl;
  constructor(private Http:HttpClient,private localStorage:LocalStorageService) { }
  public login(loginRequest:LoginRequest){
    return this.Http.post<LoginResponse>(`${this.apiServerUrl}/auth/authenticate`,loginRequest)};
  public changePassword(change:ChangePasswordRequest){
    return this.Http.post<ChangePasswordRequest>(`${this.apiServerUrl}/utilisateure/changePassword`,change)};
  public isLogin(){
    return localStorage.getItem("token")!=null;
  }
  public isAdmin(){
    return localStorage.getItem("role")==="ADMIN";
  }
  public registre(registre:RegistreRequest): Observable<RegistreRequest>{
    return this.Http.post<RegistreRequest>(`${this.apiServerUrl}/auth/register`,registre);
  }
  GetToken(){
    return localStorage.getItem('token');
  }

}
