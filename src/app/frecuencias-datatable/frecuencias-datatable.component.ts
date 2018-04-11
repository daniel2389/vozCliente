import { Component, OnInit, Input } from '@angular/core';
import { FiltrarInfoService } from '../filtrar-info.service';

@Component({
  selector: 'app-frecuencias-datatable',
  templateUrl: './frecuencias-datatable.component.html',
  styleUrls: ['./frecuencias-datatable.component.css']
})
export class FrecuenciasDatatableComponent implements OnInit {

  @Input() tipoAnalisis: string;
  private data: any;

  constructor(private filtrar: FiltrarInfoService) { }

  ngOnInit() {
    switch (this.tipoAnalisis) {
      case 'WordCloud':
        this.data = this.filtrar.getDataInfo('PQR');
        break;
      case 'Sentimiento':
        this.data = this.filtrar.getDataInfo('PQRSentimiento');
        break;

      default:
        break;
    }

    this.filtrar.updatedSeleccion.subscribe(
      (seleccion) => {
        switch (this.tipoAnalisis) {
          case 'WordCloud':
            this.data = this.filtrar.getDataInfo(seleccion);
            break;
          case 'Sentimiento':
            this.data = this.filtrar.getDataInfo(seleccion + 'Sentimiento');
            break;

          default:
            break;
        }

      }
    );
  }

}
