import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FiltrarInfoService } from "../filtrar-info.service";


declare var $:any;
declare var jQuery:any;

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, AfterViewInit {

  @Input() listaOpciones:any[];
  @Input() tituloLabel:string;
  @Input() tituloMain:string;
  @Input() TituloAno:string;

  constructor(public filtrar:FiltrarInfoService) { 
  }
  
  ngOnInit() {

    
    
  }

  ngAfterViewInit() {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    $('select').material_select();
    $("#"+this.tituloMain).on('change', () => {
      this.filtrar.setTituloMain(this.tituloMain);
      this.filtrar.setSeleccion($("#"+this.tituloMain).val());
    });
  }    
  
}
