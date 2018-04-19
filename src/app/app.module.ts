import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';



// paginas main
import { HomeComponent } from './componentes/home/home.component';
import { PageDescripcionComponent } from './componentes/page-descripcion/page-descripcion.component';
import { PageCaracterizacionComponent } from './componentes/page-caracterizacion/page-caracterizacion.component';
import { PageInventarioComponent } from './componentes/page-inventario/page-inventario.component';
import { PageAnalisisComponent } from './componentes/page-analisis/page-analisis.component';

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
import { DetalleCaracterizacionComponent } from './componentes/detalle-caracterizacion/detalle-caracterizacion.component';
import { AnalisisButtonComponent } from './componentes/analisis-button/analisis-button.component';

// rutas
import { RouterModule, Routes } from '@angular/router';

// servicios
import { FiltrarInfoService } from './filtrar-info.service';
import { InfoTablasService } from './info-tablas.service';


const appRoutes: Routes = [
  { path: 'page-caracterizacion', component: PageCaracterizacionComponent },
  { path: 'page-analisis', component: PageAnalisisComponent },
  { path: 'page-descripcion', component: PageDescripcionComponent },
  { path: 'page-inventario', component: PageInventarioComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Heroes List' }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
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
    PageDescripcionComponent,
    PageCaracterizacionComponent,
    PageInventarioComponent,
    PageAnalisisComponent,
    DetalleCaracterizacionComponent,
    AnalisisButtonComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FiltrarInfoService, InfoTablasService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
