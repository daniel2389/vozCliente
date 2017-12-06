import { Injectable } from '@angular/core';

@Injectable()
export class FiltrarInfoService {

  private tituloMain: string;
  private seleccion: string;
  constructor() { }


  public getSeleccion(): string {
    return this.seleccion;
  }

  public getTituloMain(): string {
    return
  }




  public setTituloMain(v: string) {
    this.tituloMain = v;
  }

  public setSeleccion(v: string) {
    this.seleccion = v;
  }


}
