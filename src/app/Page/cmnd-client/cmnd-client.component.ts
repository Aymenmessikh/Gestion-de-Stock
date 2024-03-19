import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CmndClient } from 'src/app/Classes/cmnd-client';
import { ClientService } from 'src/app/Service/Commande/Client/client.service';

@Component({
  selector: 'app-cmnd-client',
  templateUrl: './cmnd-client.component.html',
  styleUrls: ['./cmnd-client.component.css']
})
export class CmndClientComponent implements OnInit{
  constructor(private route:Router,private service:ClientService,private notification:ToastrService) {
  }
  page:number=1;
  totalLength:any;
  public idd!:number;
  cmndClients!:CmndClient[];
  public sendId(id: number) {
    this.route.navigate(['/dash/ligne', id]); 
    console.log("ddd"+id)
  }
  public getCommandeClient(){
    this.service.getCommand().subscribe(response=>{
      this.cmndClients=response;
      console.log(response)
    },(errors)=>{
    }
    )
  }
  public suprimmerCmnd(id:number){
    this.service.suprimmerCommand(id).subscribe(response=>{
      this.getCommandeClient();
      console.log("id="+id)
        this.notification.success("Commande Suprimmer")
    },(errors)=>{
      console.log(errors)
      this.notification.error("Faild")
      }
    )
  }
    ngOnInit(): void {
        this.getCommandeClient()
    }
}
