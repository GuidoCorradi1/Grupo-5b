import { Component } from '@angular/core';
import { Tab2Service } from './tab2.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {

  public datos: any;
  public recetita: any;
  public mostrarReceta: any=[];
  public datofiltro: any;
  public filtrito: any=[];
  public mostrarFiltro: any=[];
  public ingrediente: any=[];

  constructor(private Tab2Service: Tab2Service) {}

  ngOnInit(){
      this.Tab2Service.getReceta().subscribe(data =>{
     console.log(data);
        this.datos=data;
        this.recetita=data;
     })
    this.mostrarReceta=[0,0,0,0,0,0];

    this.Tab2Service.getIngrediente().subscribe(data =>{
       console.log(data);
          this.ingrediente=data;
       })
  }


    traerDatos(indice){
      this.mostrarReceta=[0,0,0,0,0,0];
      this.mostrarReceta[indice]=1;
    }

    traerFiltro(nombrefiltro){
      /*console.log("Ejemplo",this.datos[indicefiltro])*/
    this.Tab2Service.getFiltroch(nombrefiltro).subscribe(data =>{
      console.log("Info", data) 
          this.filtrito=data;
           })
    }

    



}

