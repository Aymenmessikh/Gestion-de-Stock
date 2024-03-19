import { Component, OnInit } from '@angular/core';
import { AfficherUtilisateure } from '../Classes/AfficherUtilisateure';
import { Utilisateure } from '../Classes/Utilisateure';
import { UtlisateureService } from '../Service/Utlisateure/utlisateure.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private service:UtlisateureService) {
  }
  user!:AfficherUtilisateure;
  token!:string;
  public getUser(){
     this.token=localStorage.getItem("token") ||"";
    this.service.getUser(this.token).subscribe(response=>{
      this.user=response;
    },(erros)=>{
      console.log(erros)
    })
  }
ngOnInit(): void {
    this.getUser()
}
public logout(){
  localStorage.clear();
}
}
