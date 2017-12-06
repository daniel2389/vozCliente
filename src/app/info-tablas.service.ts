import { Injectable } from '@angular/core';

@Injectable()
export class InfoTablasService {

  public tablaChats:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['SI', '4365'],
      ['FACTURA', '3412'],
      ['GRACIAS', '5772'],
      ['SEÑORA', '1961'],
      ['MOMENTO', '2579'],
      ['CHEC', '2557'],
      ['CHEC_CHAT', '1515'],
      ['FAVOR', '1947'],
      ['NOMBRE', '2389'],
      ['CUENTA', '1437']
    ]
  }
  public tablaEncuestas:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['ORIENTACIÓN', '339'],
      ['USUARIO', '636'],
      ['INDICA', '736'],
      ['FACTURA', '420'],
      ['SERVICIO', '550'],
      ['ENERGÍA', '318'],
      ['CONOCIMIENTO', '300'],
      ['INFORMACIÓN', '369'],
      ['RECIBIDO', '316'],
      ['CHEC', '259']
    ]
  }
  public tablaLlamadas:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['NUMERO', '1826'],
      ['BUENO', '989'],
      ['DIA', '705'],
      ['AQUÍ', '1335'],
      ['NOMBRE', '1113'],
      ['MOMENTO', '719'],
      ['SEIS', '1090'],
      ['FAVOR', '865'],
      ['INFORMACIÓN', '366'],
      ['DIRECCIÓN', '164'],
      ['SERVICIO', '600']
    ]
  }

  public tablaOficios:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['MANIZALES', '1804'],
      ['CONSUMO', '705'],
      ['CHEC', '1649'],
      ['CALDAS', '1143'],
      ['SERVICIO', '828'],
      ['EMPRESA', '732'],
      ['DERECHO', '604'],
      ['VALOR', '886'],
      ['CUENTA', '683'],
      ['NÚMERO', '473'],
      ['CONTRATO', '396']
    ]
  }

  public tablaPQR:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['PAGO', '15330'],
      ['SOLICITUD', '12816'],
      ['FACTURA', '10464'],
      ['EMPRESA', '9227'],
      ['CONSUMO', '5158'],
      ['ENTREGA', '4771'],
      ['USUARIO', '3834'],
      ['SUSCRIPTOR', '3588'],
      ['CAMBIO', '6265'],
      ['PETICIÓN', '4273']
    ]
  }

  public tablaChatsSentimiento:any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['SI', '4365'],
      ['FACTURA', '0001'],
      ['GRACIAS', '5772'],
      ['SEÑORA', '1961'],
      ['MOMENTO', '2579'],
      ['CHEC', '2557'],
      ['CHEC_CHAT', '1515'],
      ['FAVOR', '1947'],
      ['NOMBRE', '2389'],
      ['CUENTA', '1437']
    ]
  }

  constructor() { }

}
