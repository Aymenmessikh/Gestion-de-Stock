import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categorie } from 'src/app/Classes/Categorie';
import { CategorieService } from 'src/app/Service/categorie/categorie.service';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit{
  categories!:Categorie[];
  constructor(private route:Router,private service:CategorieService,private notification:ToastrService) {
  }
  public sendId(id: number) {
    this.route.navigate(['/dash/articleByCategorie', id]);
  }
  public getCategories():void{
    this.service.getCategorie().subscribe(response=>{
      this.categories=response;
      },(errors)=>{
      }
    )
  }
  supprimerCategorie(id:number){
    this.service.SuprimmerCategorie(id).subscribe(response=>{
      this.getCategories();
      this.notification.success("Categorie Suprimmer")
    },(errors)=>{
      this.notification.info("pour suprommer cette categorie Il faut suprimmer tous les article de cette Categorie")
      this.notification.error('ne peut pas suprimmer cette Categorie')
    }
    )
  }
    ngOnInit(): void {
      this.getCategories()
    }

}
