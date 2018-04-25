import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-analisis',
  templateUrl: './page-analisis.component.html',
  styleUrls: ['./page-analisis.component.css']
})
export class PageAnalisisComponent implements OnInit {

  // Lista de elementos para cada filtro
  listaUbicaciones: string[] = ['Urbano', 'Rural'];
  listaMunicipios: string[] = ['Manizales', 'Chinchina', 'Santa Rosa', 'Neira', 'Salamina'];
  listaZonas: string[] = ['Norte', 'Centro', 'Occidente', 'Oriente', 'Sur'];
  listaFuentes: string[] = ['Chat Emtelco', 'Digiturnos', 'PQR', 'Contact Center'];
  listaAnos: string[] = ['2018', '2017', '2016', '2015', '2014'];
  listaMeses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Asignacion del titulo en selecciona para cada uno de los filtros
  tituloUbicaciones = 'Ubicación';
  tituloMunicipios = 'Municipio';
  tituloZonas = 'Zona';
  tituloFuentes = 'Fuente';
  tituloAnos = 'Año';
  tituloMeses = 'Mes';

  // Asignacion de titulo para cada uno de los filtros
  tituloMainUbicaciones = 'Ubicación';
  tituloMainMunicipios = 'Municipio';
  tituloMainZonas = 'Zona';
  tituloMainFuentes = 'Fuente';
  tituloMainAnos = 'Año';
  tituloMainMeses = 'Mes';

  botonesAnalisis: any[] = [
    {
      tituloAnalisis: 'Sentimiento',
      iconoAnalisis: 'favorite_border ',
    },
    {
      tituloAnalisis: 'Emoción',
      iconoAnalisis: 'insert_emoticon ',
    },
    {
      tituloAnalisis: 'Word Cloud',
      iconoAnalisis: 'cloud_queue ',
    },
    {
      tituloAnalisis: 'Text Mining',
      iconoAnalisis: 'line_style',
    },
    {
      tituloAnalisis: 'N-Grama',
      iconoAnalisis: 'device_hub ',
    },
    {
      tituloAnalisis: 'Viaje del cliente',
      iconoAnalisis: 'timeline ',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
