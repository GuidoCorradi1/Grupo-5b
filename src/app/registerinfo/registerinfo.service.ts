import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterinfoService {

  constructor(private http: HttpClient) { }
  /*

  getData(){
    return this.http.get('http://localhost:3001/cuenta');
  }
*/
/*
  sendData(personita){
    return this.http.post('http://localhost:3001/cargar_persona',{personita});
  }
  */

  
  cargarDatos(datos){
    return this.http.post('http://localhost:3001/cargar_persona',{datos});
  }
  cargarDatosCuenta(datoscuenta){
    return this.http.post('http://localhost:3001/cargar_cuenta',{datoscuenta});
  }
  
}
