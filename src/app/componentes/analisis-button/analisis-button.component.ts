import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-analisis-button',
  templateUrl: './analisis-button.component.html',
  styleUrls: ['./analisis-button.component.css']
})
export class AnalisisButtonComponent implements OnInit {

  @Input() listaBotonAnalisis: any[];

  constructor() { }

  ngOnInit() {
  }

}
