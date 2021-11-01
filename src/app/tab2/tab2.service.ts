import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class Tab2Service {

  constructor(private http: HttpClient) { }

  getReceta(){
        return this.http.get('http://localhost:3001/receta');
  }

  getIngrediente(){
        return this.http.get('http://localhost:3001/getfiltro');
  }

  getFiltroch(campofiltro){

        console.log("campofiltro", campofiltro)
        return this.http.post('http://localhost:3001/filtro',{campofiltro});
  }

    
  

}


