import { Injectable, EventEmitter } from '@angular/core';
import { InfoTablasService } from './info-tablas.service';

@Injectable()
export class FiltrarInfoService {

  private tituloMain: string;
  private seleccion: string;
  private dataInfo: any;
  public updatedTituloMain: EventEmitter<string> = new EventEmitter();
  public updatedSeleccion: EventEmitter<string> = new EventEmitter();

  constructor(private infoTablas: InfoTablasService) { }


  public getSeleccion(): string {
    return this.seleccion;
  }

  public getTituloMain(): string {
    return this.tituloMain;
  }


  public getDataInfo(fuente): any {
    switch (fuente) {
      case 'PQR':
        return this.infoTablas.tablaPQR;
      case 'Oficios':
        return this.infoTablas.tablaOficios;
      case 'Encuestas de Servicio Comercial':
        return this.infoTablas.tablaEncuestas;
      case 'Chats':
        return this.infoTablas.tablaChats;
      case 'Llamadas Contact Center':
        return this.infoTablas.tablaLlamadas;
      case 'PQRSentimiento':
        return this.infoTablas.tablaPQRSentimiento;
      case 'OficiosSentimiento':
        return this.infoTablas.tablaOficiosSentimiento;
      case 'Encuestas de Servicio ComercialSentimiento':
        return this.infoTablas.tablaEncuestasSentimiento;
      case 'ChatsSentimiento':
        return this.infoTablas.tablaChatsSentimiento;
      case 'Llamadas Contact CenterSentimiento':
        return this.infoTablas.tablaLlamadasSentimiento;
      default:
        break;
    }
  }


  public setTituloMain(v: string) {
    this.tituloMain = v;
    this.updatedTituloMain.emit(this.tituloMain);
  }

  public setSeleccion(v: string) {
    this.seleccion = v;
    this.updatedSeleccion.emit(this.seleccion);
  }





}
