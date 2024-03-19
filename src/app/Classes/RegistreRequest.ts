import { Roles } from "./roles";

export interface RegistreRequest{
  nom:string;
  prenom:string;
  password:string;
  email:string;
  role:string;
  //photos:string;
}
