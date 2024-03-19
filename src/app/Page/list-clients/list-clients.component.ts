import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Client } from 'src/app/Classes/Client';
import { ClientService } from 'src/app/Service/Client/client.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.css']
})
export class ListClientsComponent implements OnInit{
  clients!:Client[];
  photo:any;
  page:number=1;
  totalLength:any;
  constructor(private service:ClientService,private notification:ToastrService) {
  }
  public getClient():void{
    this.service.getClients().subscribe(response=>{
      this.clients=response;
      console.log(this.clients)
      this.clients.forEach(client=> {
        if (client.photoName != null) {
          this.service.getimage(client.photoName).subscribe((data: Blob) => {
              const reader = new FileReader();
              reader.onloadend = () => {
                client.photoData = reader.result;
              };
              reader.readAsDataURL(data);
            }, (errors) => {
            }
          )
        }
      })
    },(errors)=>{
      }
    )
  }
  public suprimmer(id:number){
    this.service.SuprimmerClient(id).subscribe(response=>{
      this.notification.success('Client Suprimmer')
      this.getClient()
    },(errors)=>{
      this.notification.error('FAILD')
      }

    )
  }

  ngOnInit(): void {
        this.getClient()
    }

}
