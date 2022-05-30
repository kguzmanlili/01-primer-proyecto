import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable({
    providedIn: "root"
})
export class DbzService {

    private _listaPersonajes: Personaje[] = [
        {
        nombre:'Goku',
        poder: 1000
       },
       {
         nombre:'Vegeta',
         poder: 9000
        },
        {
         nombre:'Piccolo',
         poder: 8000
        }
      ];

      get listaPersonajes(){
          return [...this._listaPersonajes];
      }
  

      agregarNuevoPersonaje( personaje: Personaje){
    
        this._listaPersonajes.push(personaje);
      }

}