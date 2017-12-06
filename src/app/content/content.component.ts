import { Component, OnInit } from '@angular/core';
import { FuentesComponent } from "../fuentes/fuentes.component";
import { AnalisisComponent } from "../analisis/analisis.component";
import { AnalisisSentimientoComponent } from "../analisis-sentimiento/analisis-sentimiento.component";
declare var $: any;
declare var jQuery: any;



@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']

})

export class ContentComponent implements OnInit {

    text


    constructor() { }

    ngOnInit() {

        $('.carousel.carousel-slider').carousel({ fullWidth: true });
        $('.tooltipped').tooltip({ delay: 50 });




    }


}
