import { Component, OnInit } from '@angular/core';
import { FiltrarInfoService } from "../filtrar-info.service";

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  private imgSrc:string = 'assets/images/PQR_Word_Cloud.png';
  private titulo:string = 'Fuente';
  private seleccion:string = 'PQR';

  constructor(private filtrar:FiltrarInfoService) { }

  ngOnInit() {
    this.filtrar.updatedTituloMain.subscribe(
      (tituloMain)=>{
        this.titulo = tituloMain;
      }
    );
    this.filtrar.updatedSeleccion.subscribe(
      (seleccion)=>{
        this.seleccion = seleccion;
        this.setImgFuente();
      }
    );
  }


  public setImgFuente() {
    switch (this.seleccion) {
      case 'PQR':
        this.imgSrc = 'assets/images/PQR_Word_Cloud.png';
      break;
      case 'Oficios':
        this.imgSrc = 'assets/images/Oficios_Word_Cloud.png'
      break
      case 'Servcio Comercial':
      
      break
      case 'Chats':
      
      break
    
      default:
        break;
    }
  }

}
