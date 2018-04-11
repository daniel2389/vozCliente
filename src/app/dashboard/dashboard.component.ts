import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ContentComponent } from '../content/content.component';
import { FilterComponent } from '../filter/filter.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaFuentes: string[] = ['PQR', 'Oficios', 'Encuestas de Servicio Comercial', 'Chats', 'Llamadas Contact Center'];
  listaAnos: string[] = ['2017', '2016', '2015', '2014'];
  // tslint:disable-next-line:max-line-length
  listaMeses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  tituloFuentes = 'la fuente';
  tituloAnos = 'el año';
  tituloMeses = 'el mes';
  tituloMainFuentes = 'Fuente';
  tituloMainAnos = 'Año';
  tituloMainMeses = 'Mes';

  constructor() { }

  ngOnInit() {
  }

}
