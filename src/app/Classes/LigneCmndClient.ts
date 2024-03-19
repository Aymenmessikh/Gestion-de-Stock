import { Article } from "./Article";
import { CmndClient } from "./cmnd-client";

export interface LigneCmndClient{
  id:number;
  codeArticle:string;
  quantite:number;
  designation:string;
  prix:number;
  prixUnitaire:number;
}
