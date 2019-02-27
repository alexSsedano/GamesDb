import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

datos = [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,"tuputamadreacabaio"];

  constructor() { }

  getDatos(){
    return this.datos;
  }

}
