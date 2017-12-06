import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class FiltrarInfoService {

  private tituloMain: string;
  private seleccion: string;
  public updatedTituloMain:EventEmitter<string> = new EventEmitter();
  public updatedSeleccion:EventEmitter<string> = new EventEmitter();

  constructor() { }


  public getSeleccion(): string {
    return this.seleccion;
  }

  public getTituloMain(): string {
    return
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
