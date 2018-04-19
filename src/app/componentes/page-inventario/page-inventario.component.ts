import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-inventario',
  templateUrl: './page-inventario.component.html',
  styleUrls: ['./page-inventario.component.css']
})
export class PageInventarioComponent implements OnInit {

  // Lista de elementos para cada filtro
  listaUbicaciones: string[] = ['Urbano', 'Rural'];
  listaMunicipios: string[] = ['Manizales', 'Chinchina', 'Santa Rosa', 'Neira', 'Salamina'];
  listaZonas: string[] = ['Norte', 'Centro', 'Occidente', 'Oriente', 'Sur'];
  listaFuentes: string[] = ['PQR', 'Oficios', 'Encuestas de Servicio Comercial', 'Chats', 'Llamadas Contact Center'];
  listaAnos: string[] = ['2018', '2017', '2016', '2015', '2014'];
  listaMeses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Asignacion del titulo en selecciona para cada uno de los filtros
  tituloUbicaciones = 'la ubicación';
  tituloMunicipios = 'el municipio';
  tituloZonas = 'la zona';
  tituloFuentes = 'la fuente';
  tituloAnos = 'el año';
  tituloMeses = 'el mes';

  // Asignacion de titulo para cada uno de los filtros
  tituloMainUbicaciones = 'Ubicación';
  tituloMainMunicipios = 'Municipio';
  tituloMainZonas = 'Zona';
  tituloMainFuentes = 'Fuente';
  tituloMainAnos = 'Año';
  tituloMainMeses = 'Mes';

  constructor() { }

  ngOnInit() {
  }

}
