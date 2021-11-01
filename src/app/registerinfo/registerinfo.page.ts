
import { Component, OnInit } from '@angular/core';
import { RegisterinfoService } from './registerinfo.service';

@Component({
  selector: 'app-registerinfo',
  templateUrl: './registerinfo.page.html',
  styleUrls: ['./registerinfo.page.scss'],
})
export class RegisterinfoPage implements OnInit {

  public nombre: any;
  public apellido: any;
  public usuario: any;
  public clave: any;
  public datos: any=[];
  public datoscuenta: any=[];
  
  public name: any;
  /*
  public name: any;
  public datitos: any;
  public datosArreglo: any;
  */

  constructor(private registerinfoService: RegisterinfoService) { }

  ngOnInit() {
  }

  enviarinfo(){
    
    this.datos.push(this.nombre);
    this.datos.push(this.apellido);
    this.registerinfoService.cargarDatos(this.datos).subscribe((d) => {
      alert("Información Cargada")
    });
    
    }

    Cuentaenviar(){
    
      this.datoscuenta.push(this.usuario);
      this.datoscuenta.push(this.clave);
      this.registerinfoService.cargarDatosCuenta(this.datoscuenta).subscribe((d) => {
        alert("Información Cargada")
      });
      
      }
    
  }

  /*
  actualizar(){
    this.registerinfoService.sendData(this.name).subscribe(data =>{
          alert("información guardada");
    })
    
  }
*/


  /*
  traerDatos(){
    this.RegisterinfoService.getData().subscribe((d) => {});
       this.datitos = data['results'][0];
       this.datosArreglo = data['results'];
    })
  }

*/


