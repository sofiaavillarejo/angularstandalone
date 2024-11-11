import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas {
  //PARA LAS PETICIONES API VIENE UN OBJETO LLAMADO HttpClient QUE NOS PERMITIRA REALIZAR LAS PETICIONES
  constructor(private _http: HttpClient){}
  
    getPersonas(): Observable<any> {
      let url = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
      //todo: TENEMOS DOS FORMAS DE REALIZAR LA FUNCIONALIDAD DE DEVOLCUION DE DATOS
      //todo: 1. IGUAL QUE EN VUE -> CREANDO UNA PROMESA POR ENCIMA DEL METODO
      //todo: 2. DEVOLVER DIRECTAMENTE LA PETICION PARA QUE SEA EL COMPONENT QUIEN SE SUSCRIBA
      return this._http.get(url);
    }

    //todo: FORMA 1 DE LLAMAR AL SERVICIO CON PROMESA
    getPersonasPromesa(): Promise<any> {
      let url = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
      let promise = new Promise((resolve) => {
        this._http.get(url).subscribe((response) => {
          //aqui trae la respuesta de la api
          resolve(response);
        })
      })
      //devolvemos la promesa para luego recuperarlo en el .ts
      return promise;
    }
}