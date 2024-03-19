import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Fournisseure } from 'src/app/Classes/Fournisseure';
import { FournisseureService } from 'src/app/Service/Fournisseure/fournisseure.service';

@Component({
  selector: 'app-list-fournisseure',
  templateUrl: './list-fournisseure.component.html',
  styleUrls: ['./list-fournisseure.component.css']
})
export class ListFournisseureComponent implements OnInit{
  fours!:Fournisseure[];
  constructor(private service:FournisseureService,private notification:ToastrService) {
  }
  public getFournisseure():void{
    this.service.getFournniseurs().subscribe(response=>{
        this.fours=response;
      },(errors)=>{
      }
    )
  }
  public suprimmer(id:number){
    this.service.SuprimmerFour(id).subscribe(response=>{
        this.notification.success('Fournisseure Suprimmer')
        this.getFournisseure()
      },(errors)=>{
        this.notification.error('FAILD')
      }

    )
  }
  ngOnInit(): void {
    this.getFournisseure()
  }
}
