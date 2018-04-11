import { Component, OnInit } from '@angular/core';
import { FiltrarInfoService } from '../filtrar-info.service';

@Component({
  selector: 'app-word-cloud',
  templateUrl: './word-cloud.component.html',
  styleUrls: ['./word-cloud.component.css']
})
export class WordCloudComponent implements OnInit {

  private imgSrc = 'assets/images/generalpqrs.png';
  private titulo = 'Fuente';
  private seleccion = 'PQR';

  constructor(private filtrar: FiltrarInfoService) { }

  ngOnInit() {
    this.filtrar.updatedTituloMain.subscribe(
      (tituloMain) => {
        this.titulo = tituloMain;
      }
    );
    this.filtrar.updatedSeleccion.subscribe(
      (seleccion) => {
        this.seleccion = seleccion;
        this.setImgFuente();
      }
    );
  }


  public setImgFuente() {
    switch (this.seleccion) {
      case 'PQR':
        this.imgSrc = 'assets/images/generalpqrs.png';
        break;
      case 'Oficios':
        this.imgSrc = 'assets/images/totaloficios.png';
        break;
      case 'Encuestas de Servicio Comercial':
        this.imgSrc = 'assets/images/generalencuestas.png';
        break;
      case 'Chats':
        this.imgSrc = 'assets/images/generalchats.png';
        break;
      case 'Llamadas Contact Center':
        this.imgSrc = 'assets/images/generalllamadas.png';
        break;

      default:
        break;
    }
  }

}
