import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CmndClient } from 'src/app/Classes/cmnd-client';
import { LigneCmndClient } from 'src/app/Classes/LigneCmndClient';
import { ClientService } from 'src/app/Service/Commande/Client/client.service';

@Component({
  selector: 'app-ligne-cmnd',
  templateUrl: './ligne-cmnd.component.html',
  styleUrls: ['./ligne-cmnd.component.css']
})
export class LigneCmndComponent implements OnInit{
  constructor(private routes:ActivatedRoute,private service:ClientService,private notification:ToastrService) {
  }
  lignCmnd!:LigneCmndClient[];
  ComandeClient!:CmndClient;
  id!:number;
  public getLigneCommande(){
    this.service.getLigneComandeClients(this.id).subscribe(response=>{
      this.lignCmnd=response;
      console.log(this.lignCmnd)
    },(errors)=>{
      console.log(errors)
    })
  }
  public getCommande(){
    this.service.getComandeClients(this.id).subscribe(response=>{
      this.ComandeClient=response
    },(errors)=>{
      console.log(errors)
    })
  }
    ngOnInit(): void {
      this.routes.params.subscribe(params =>{
        this.id=params['id'];
        console.log("nichen"+this.id)
      })
      this.getLigneCommande();
      this.getCommande();
    }

}
