import { Component, OnInit } from '@angular/core';
import { FiltrarInfoService } from "../filtrar-info.service";

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  private imgSrc:string;
  private titulo:string;

  constructor(private filtrar:FiltrarInfoService) { }

  ngOnInit() {
    this.titulo = this.filtrar.getTituloMain();
    this.imgSrc = 'assets/images/PQR_Word_Cloud.png';
  }

  public checkFuente(){
    switch (this.filtrar.getTituloMain()) {
      case 'Fuente':
        this.setImgFuente();
      break;
      case 'Mes':
      
      break;

      case 'Año':
      
      break;
      
      
      default:
        break;
    }
  }

  public setImgFuente() {
    switch (this.filtrar.getSeleccion()) {
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
