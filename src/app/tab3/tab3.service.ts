import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class Tab3Service {

  constructor(private http: HttpClient) { }

  getPersona(){
        return this.http.get('http://localhost:3001/persona');
  }

  getCuenta(){
        return this.http.get('http://localhost:3001/cuenta');
  }
  
  cargarReceta(datosreceta){
    return this.http.post('http://localhost:3001/cargar_receta',{datosreceta});
  }

}

