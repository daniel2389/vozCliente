import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  listaBotones2: any[] = [
    {
      titulo: ' Contact Center',
      icono: 'contact_phone ',
      color: 'azul'
    },
    {
      titulo: ' Chat',
      icono: 'chat ',
      color: 'verde'
    },
    {
      titulo: ' PQR',
      icono: 'collections_bookmark ',
      color: 'amarillo'
    },
    {
      titulo: ' Digiturnos',
      icono: 'confirmation_number ',
      color: 'rojo'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
