import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-frecuencias-datatable',
  templateUrl: './frecuencias-datatable.component.html',
  styleUrls: ['./frecuencias-datatable.component.css']
})
export class FrecuenciasDatatableComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
