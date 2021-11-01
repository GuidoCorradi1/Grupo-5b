import { Component } from '@angular/core';
import { Tab3Service } from './tab3.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {

  public persona: any;
  public personita: any;
  public cuenta: any;
  public cuentita: any;
  public nombrerec: any;
  public preciorec: any;
  public descripcionrec: any;
  public datosrec: any=[];


  constructor(private tab3service: Tab3Service) {}

  ngOnInit(){
  

  this.tab3service.getPersona().subscribe(data =>{
        console.log(data);
        this.persona=data;
        this.personita=data;
        })

    this.tab3service.getCuenta().subscribe(data =>{
          console.log(data);
          this.cuenta=data;
          this.cuentita=data;
          })

}

enviarReceta(){
    
  this.datosrec.push(this.nombrerec);
  this.datosrec.push(this.preciorec);
  this.datosrec.push(this.descripcionrec)
  this.tab3service.cargarReceta(this.datosrec).subscribe((d) => {
    alert("Receta enviada a revisión, una vez aprobada, se mostrará con las demás, gracias!")
  });
  
  }



}