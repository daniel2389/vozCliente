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
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Negativo', '31'],
      ['Muy Positivo', '1647'],
      ['Negativo', '1876'],
      ['Neutro', '1961'],
      ['Positivo', '7879']
    ]
  }

  public tablaEncuestasSentimiento:any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Negativo', '7'],
      ['Muy Positivo', '58'],
      ['Negativo', '929'],
      ['Neutro', '4338'],
      ['Positivo', '651']
    ]
  }

  public tablaLlamadasSentimiento:any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Negativo', '58'],
      ['Muy Positivo', '558'],
      ['Negativo', '60'],
      ['Neutro', '15'],
      ['Positivo', '84']
    ]
  }

  public tablaOficiosSentimiento:any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Negativo', '12'],
      ['Muy Positivo', '339'],
      ['Negativo', '893'],
      ['Neutro', '130400'],
      ['Positivo', '2334']
    ]
  }

  public tablaPQRSentimiento:any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Negativo', '55'],
      ['Muy Positivo', '1281'],
      ['Negativo', '8572'],
      ['Neutro', '64814'],
      ['Positivo', '5236']
    ]
  }
  

  constructor() { }

}
