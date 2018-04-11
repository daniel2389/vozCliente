import { Component, OnInit } from '@angular/core';
import { FiltrarInfoService } from '../filtrar-info.service';

@Component({
  selector: 'app-analisis-sentimiento',
  templateUrl: './analisis-sentimiento.component.html',
  styleUrls: ['./analisis-sentimiento.component.css']
})
export class AnalisisSentimientoComponent implements OnInit {

  private imgSrc = 'assets/images/PQRGeneral.png';
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
        this.imgSrc = 'assets/images/PQRGeneral.png';
        break;
      case 'Oficios':
        this.imgSrc = 'assets/images/OficiosGeneral.png';
        break;
      case 'Encuestas de Servicio Comercial':
        this.imgSrc = 'assets/images/EncuentasGeneral.png';
        break;
      case 'Chats':
        this.imgSrc = 'assets/images/CHATSGeneral.png';
        break;
      case 'Llamadas Contact Center':
        this.imgSrc = 'assets/images/LlamadasGeneral.png';
        break;

      default:
        break;
    }
  }

}
