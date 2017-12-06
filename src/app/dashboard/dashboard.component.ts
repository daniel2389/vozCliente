import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { ContentComponent } from "../content/content.component";
import { FilterComponent } from "../filter/filter.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  listaFuentes: string[] = ['PQR', 'Oficios', 'Servicio Comercial', 'Chats'];
  listaMeses: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'];
  listaAnos: string[] = ['2017', '2016', '2015', '2014']
  tituloFuentes: string = 'la fuente';
  tituloMeses: string = 'el mes';
  tituloAnos: string = 'el año';
  tituloMainFuentes: string = 'Fuente';
  tituloMainMeses: string = 'Mes';
  tituloMainAnos: string = 'Año';

  constructor() { }

  ngOnInit() {
  }

}
