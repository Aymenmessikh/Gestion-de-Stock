import { address } from "./Address";

export interface Client{
  id:number;
  nome:string;
  pronome:string;
  nemTel:string;
  adresse:address;
  mail:string;
  photoName:string;
  photoData:any;
}
