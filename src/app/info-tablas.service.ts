import { Injectable } from '@angular/core';

@Injectable()
export class InfoTablasService {

  private tablaPQR:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['SI', '4365'],
      []
    ]
  }

  constructor() { }

}
