import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-page-analisis',
  templateUrl: './page-analisis.component.html',
  styleUrls: ['./page-analisis.component.css']
})
export class PageAnalisisComponent implements OnInit {

  botonesAnalisis: any[] = [
    {
      tituloAnalisis: 'Word Cloud',
      iconoAnalisis: 'contact_phone ',
    },
    {
      tituloAnalisis: 'Análisis del Sentimiento',
      iconoAnalisis: 'chat ',
    },
    {
      tituloAnalisis: 'Análisis de la Emoción',
      iconoAnalisis: 'collections_bookmark ',
    },
    {
      tituloAnalisis: 'N-Grama',
      iconoAnalisis: 'confirmation_number ',
    },
    {
      tituloAnalisis: 'Viaje del cliente',
      iconoAnalisis: 'confirmation_number ',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
