import { EtatCommand } from "./EtatCommand";
import { LigneCmndClient } from "./LigneCmndClient";

export interface CmndClient{
   id:number;
   code:string;
   mail:string;
   dateCommande:Date;
   etatCommande:String;
   ligneCmndClientDtos:LigneCmndClient[];
   prixUnitaire:number;
}