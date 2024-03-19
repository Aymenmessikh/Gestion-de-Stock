import { Component, OnInit } from '@angular/core';
import { AfficherUtilisateure } from 'src/app/Classes/AfficherUtilisateure';
import { Utilisateure } from 'src/app/Classes/Utilisateure';
import { UtlisateureService } from 'src/app/Service/Utlisateure/utlisateure.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private service: UtlisateureService) {}

  user!:AfficherUtilisateure;
  token!: string;

  public getUser(token: string) {
    return this.service.getUser(token).subscribe(response => {
      this.user=response;
      console.log(response);
    });
  }

  ngOnInit(): void {
    // Use nullish coalescing operator to handle null case
    this.token = localStorage.getItem('token') ?? '';

    this.getUser(this.token);
  }
}
