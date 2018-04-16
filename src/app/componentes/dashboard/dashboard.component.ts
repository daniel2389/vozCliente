import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../content/content.component';
import { FilterComponent } from '../filter/filter.component';
import { FooterComponent } from '../footer/footer.component';
import { SuitTabComponent } from '../suit-tab/suit-tab.component';
import { CardInfoComponent } from '../card-info/card-info.component';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Lista de elementos para cada filtro
  listaMunicipios: string[] = ['Manizales', 'Chinchina', 'Santa Rosa', 'Neira', 'Salamina'];
  listaZonas: string[] = ['Norte', 'Centro', 'Occidente', 'Oriente', 'Sur'];
  listaFuentes: string[] = ['PQR', 'Oficios', 'Encuestas de Servicio Comercial', 'Chats', 'Llamadas Contact Center'];
  listaAnos: string[] = ['2018', '2017', '2016', '2015', '2014'];
  listaMeses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  // Asignacion del titulo en selecciona para cada uno de los filtros
  tituloMunicipios = 'el municipio';
  tituloZonas = 'la zona';
  tituloFuentes = 'la fuente';
  tituloAnos = 'el año';
  tituloMeses = 'el mes';

  // Asignacion de titulo para cada uno de los filtros
  tituloMainMunicipios = 'Municipio';
  tituloMainZonas = 'Zona';
  tituloMainFuentes = 'Fuente';
  tituloMainAnos = 'Año';
  tituloMainMeses = 'Mes';

  constructor() { }

  ngOnInit() {
  }

}
