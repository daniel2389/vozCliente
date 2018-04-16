import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


// paginas main
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HomeComponent } from './componentes/home/home.component';

// componentes
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContentComponent } from './componentes/content/content.component';
import { FilterComponent } from './componentes/filter/filter.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ChartComponent } from './componentes/chart/chart.component';
import { WordCloudComponent } from './componentes/word-cloud/word-cloud.component';
import { DataTableComponent } from './componentes/data-table/data-table.component';
import { FuentesComponent } from './componentes/fuentes/fuentes.component';
import { AnalisisComponent } from './componentes/analisis/analisis.component';
import { ChartPieComponent } from './componentes/chart-pie/chart-pie.component';
import { AnalisisSentimientoComponent } from './componentes/analisis-sentimiento/analisis-sentimiento.component';
import { FrecuenciasDatatableComponent } from './componentes/frecuencias-datatable/frecuencias-datatable.component';
import { MainButtonComponent } from './componentes/main-button/main-button.component';
import { BreadcrumbComponent } from './componentes/breadcrumb/breadcrumb.component';
import { SuitTabComponent } from './componentes/suit-tab/suit-tab.component';
import { CardInfoComponent } from './componentes/card-info/card-info.component';

// rutas
import { APP_ROUTING } from './app.routes';

// servicios
import { FiltrarInfoService } from './filtrar-info.service';
import { InfoTablasService } from './info-tablas.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ContentComponent,
    FilterComponent,
    FooterComponent,
    ChartComponent,
    WordCloudComponent,
    DataTableComponent,
    FuentesComponent,
    AnalisisComponent,
    ChartPieComponent,
    AnalisisSentimientoComponent,
    FrecuenciasDatatableComponent,
    MainButtonComponent,
    BreadcrumbComponent,
    HomeComponent,
    SuitTabComponent,
    CardInfoComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    APP_ROUTING,
  ],
  providers: [FiltrarInfoService, InfoTablasService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
