import { Injectable } from '@angular/core';

@Injectable()
export class InfoTablasService {

  public tablaChats: any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['GRACIAS', '5772'],
      ['SI', '4365'],
      ['FACTURA', '3412'],
      ['MOMENTO', '2579'],
      ['CHEC', '2557'],
      ['NOMBRE', '2389'],
      ['SEÑORA', '1961'],
      ['FAVOR', '1947'],
      ['CHEC CHAT', '1515'],
      ['CUENTA', '1437']
    ]
  };
  public tablaEncuestas: any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['INDICA', '736'],
      ['USUARIO', '636'],
      ['SERVICIO', '550'],
      ['FACTURA', '420'],
      ['INFORMACIÓN', '369'],
      ['ORIENTACIÓN', '339'],
      ['ENERGÍA', '318'],
      ['RECIBIDO', '316'],
      ['CONOCIMIENTO', '300'],
      ['CHEC', '259']
    ]
  };
  public tablaLlamadas: any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['NÚMERO', '1826'],
      ['AQUÍ', '1335'],
      ['NOMBRE', '1113'],
      ['SEIS', '1090'],
      ['BUENO', '989'],
      ['FAVOR', '865'],
      ['MOMENTO', '719'],
      ['DIA', '705'],
      ['SERVICIO', '600'],
      ['INFORMACIÓN', '366'],
      ['DIRECCIÓN', '164'],
    ]
  };

  public tablaOficios: any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['MANIZALES', '1804'],
      ['CHEC', '1649'],
      ['CALDAS', '1143'],
      ['VALOR', '886'],
      ['SERVICIO', '828'],
      ['EMPRESA', '732'],
      ['CONSUMO', '705'],
      ['CUENTA', '683'],
      ['DERECHO', '604'],
      ['NÚMERO', '473'],
      ['CONTRATO', '396']
    ]
  };

  public tablaPQR: any = {
    headers: ['Palabra', 'Frecuencia'],
    rows: [
      ['PAGO', '15330'],
      ['SOLICITUD', '12816'],
      ['FACTURA', '10464'],
      ['EMPRESA', '9227'],
      ['CAMBIO', '6265'],
      ['CONSUMO', '5158'],
      ['ENTREGA', '4771'],
      ['PETICIÓN', '4273'],
      ['USUARIO', '3834'],
      ['SUSCRIPTOR', '3588'],
    ]
  };

  public tablaChatsSentimiento: any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Positivo', '7879'],
      ['Neutro', '1961'],
      ['Negativo', '1876'],
      ['Muy Positivo', '1647'],
      ['Muy Negativo', '31'],
    ]
  };

  public tablaEncuestasSentimiento: any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Neutro', '4338'],
      ['Negativo', '929'],
      ['Positivo', '651'],
      ['Muy Positivo', '58'],
      ['Muy Negativo', '7'],
    ]
  };

  public tablaLlamadasSentimiento: any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Muy Positivo', '558'],
      ['Positivo', '84'],
      ['Negativo', '60'],
      ['Muy Negativo', '58'],
      ['Neutro', '15'],
    ]
  };

  public tablaOficiosSentimiento: any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Neutro', '130400'],
      ['Positivo', '2334'],
      ['Negativo', '893'],
      ['Muy Positivo', '339'],
      ['Muy Negativo', '12'],
    ]
  };

  public tablaPQRSentimiento: any = {
    headers: ['Sentimiento', 'Frecuencia'],
    rows: [
      ['Neutro', '64814'],
      ['Negativo', '8572'],
      ['Positivo', '5236'],
      ['Muy Positivo', '1281'],
      ['Muy Negativo', '55'],
    ]
  };


  constructor() { }

}
