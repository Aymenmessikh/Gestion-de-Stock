import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Article } from 'src/app/Classes/Article';
import { Client } from 'src/app/Classes/Client';
import { CmndClient } from 'src/app/Classes/cmnd-client';
import { EtatCommand } from 'src/app/Classes/EtatCommand';
import { LigneCmndClient } from 'src/app/Classes/LigneCmndClient';
import { ArticleService } from 'src/app/Service/Article/article.service';
import { ClientService } from 'src/app/Service/Commande/Client/client.service';

@Component({
  selector: 'app-nv-cmnd-client',
  templateUrl: './nv-cmnd-client.component.html',
  styleUrls: ['./nv-cmnd-client.component.css']
})
export class NvCmndClientComponent implements OnInit {
  cmndClient!: CmndClient;
  montant: number=0;
  Articles!:Article[];
  montants: number=0;
  CmndForm: FormGroup | any;
  etatCmnd!: EtatCommand;
  clients!: Client|null;
  artcile!: Article;
  designation!:string;
  montantsCmnd:number=0;
  ligneComand: Array<LigneCmndClient>=[];
  constructor(private notification: ToastrService, private service: ClientService,private articleService:ArticleService) {
    this.CmndForm = new FormGroup({
      codeArticle: new FormControl('', Validators.required),
      quantite: new FormControl('', Validators.required),
      codeCmnd: new FormControl('', Validators.required),
      mail: new FormControl('', [Validators.required,Validators.email]),
    });
    this.cmndClient = {
      code: "",
      mail: "",
      id: 0,
      prixUnitaire: 0,
      dateCommande:new Date(),
      etatCommande:"",
      ligneCmndClientDtos: [{
        codeArticle: "",
        designation:"",
        prix:0,
        id: 0,
        quantite: 0,
        prixUnitaire:0
      }]
    };
  }

  public ajouterligneCmnd(){
    this.montantsCmnd+=this.montant;
    const ligneCmnd : LigneCmndClient = {
      codeArticle: this.CmndForm.get("codeArticle").value,
      quantite: this.CmndForm.get("quantite").value,
      id: 0,
      prixUnitaire: this.montant,
      designation: this.designation,
      prix: this.montants
    };
    this.calcule(ligneCmnd.quantite);
    this.ligneComand.push(ligneCmnd);
    this.CmndForm.get('codeArticle').reset()
    this.CmndForm.get('quantite').reset()
}
public removeligneCmnd(i:number){
    this.ligneComand.splice(i,1)
  this.montantsCmnd-=this.ligneComand[i].prixUnitaire;
}

  public ajouterCommandeClient() {
    this.cmndClient.mail = this.CmndForm.get("mail").value;
    this.cmndClient.code = this.CmndForm.get("codeCmnd").value;
    this.cmndClient.prixUnitaire=this.montantsCmnd;
    this.cmndClient.ligneCmndClientDtos=this.ligneComand;
      this.service.ajouterCmnd(this.cmndClient).subscribe(
        (response) => {
          response = this.cmndClient;
          this.CmndForm.reset();
          this.montant=0;
          this.montantsCmnd=0;
          //this.ligneComand=[];
          this.ligneComand.splice(0);
          this.clients=null;
        },
        (errors) => {
          console.log(errors);
        }
      );

  }

  getclient(mail: string) {
    this.service.getClients(mail).subscribe(response => {
      this.clients = response;
    }, (errors) => {
      console.log(errors)
    });
  }

  getArticle(codeArticle: string) {
    this.service.getArticle(codeArticle).subscribe(response => {
      this.artcile = response;
      this.montants = this.artcile.prixUnitairHt;
      this.designation=this.artcile.designation;
    }, (errors) => {
      console.log(errors);
    });
  }

  calcule(quantite: number) {
    this.montant = this.montants * quantite;
  }
  getALLArticle(){
    this.articleService.getArticle().subscribe(
      response=>{
        this.Articles=response
        console.log(response)
      },(errors)=>{
        console.log(errors)
    }
    )
  }

  ngOnInit(): void {
    this.CmndForm.get('mail').valueChanges.subscribe((email: string) => {
      if (email) {
        this.getclient(email);
      }
    });

    this.CmndForm.get('codeArticle').valueChanges.subscribe((codeArticle: string) => {
      if (codeArticle) {
        this.getArticle(codeArticle);
      }
    });

    this.CmndForm.get("quantite").valueChanges.subscribe((quantite: number) => {
      if (quantite) {
        this.calcule(quantite);
      }
    });
    this.getALLArticle();
  }
}
