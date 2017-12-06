import { Component, OnInit } from '@angular/core';
import { WordCloudComponent } from "../word-cloud/word-cloud.component";
import { FrecuenciasDatatableComponent } from "../frecuencias-datatable/frecuencias-datatable.component";


@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.component.html',
  styleUrls: ['./analisis.component.css']
})
export class AnalisisComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
