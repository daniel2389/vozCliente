import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';





// paginas main
import { PageDescripcionComponent } from './componentes/page-descripcion/page-descripcion.component';
import { PageCaracterizacionComponent } from './componentes/page-caracterizacion/page-caracterizacion.component';
import { PageInventarioComponent } from './componentes/page-inventario/page-inventario.component';
import { PageAnalisisComponent } from './componentes/page-analisis/page-analisis.component';
import { PageWelcomeComponent } from './componentes/page-welcome/page-welcome.component';
import { PageHomeComponent } from './componentes/page-home/page-home.component';

// componentes
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ContentComponent } from './componentes/content/content.component';
import { FilterComponent } from './componentes/filter/filter.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ChartComponent } from './componentes/chart/chart.component';
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
import { WelcomeTextComponent } from './componentes/welcome-text/welcome-text.component';
import { MainNavigationComponent } from './componentes/main-navigation/main-navigation.component';



// componentes pagina de análisis
import { WordCloudComponent } from './componentes/word-cloud/word-cloud.component';
import { ContextoComponent } from './componentes/contexto/contexto.component';
import { ViajeComponent } from './componentes/viaje/viaje.component';
import { SentimientoComponent } from './componentes/sentimiento/sentimiento.component';
import { EmocionComponent } from './componentes/emocion/emocion.component';
import { DendrogramaComponent } from './componentes/dendrograma/dendrograma.component';



// rutas
import { RouterModule, Routes } from '@angular/router';

// servicios
import { FiltrarInfoService } from './filtrar-info.service';
import { InfoTablasService } from './info-tablas.service';



const appRoutes: Routes = [
  /* { outlet: 'main-router', path: '', component: PageWelcomeComponent },
  { outlet: 'main-router', path: 'main-navigation', component: MainNavigationComponent }, // esta es la pagina donde empezaran a funcionar las demas paginas hijas
  { outlet: 'main-router', path: 'page-welcome', component: PageWelcomeComponent }, */
  { path: 'page-caracterizacion', component: PageCaracterizacionComponent },
  { path: 'page-analisis', component: PageAnalisisComponent },
  { path: 'page-descripcion', component: PageDescripcionComponent },
  { path: 'page-inventario', component: PageInventarioComponent },
  { path: 'page-home', component: PageHomeComponent },
  { path: '', component: PageHomeComponent },
  {
    path: '',
    redirectTo: 'page-home',
    pathMatch: 'full'
  }
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
    SuitTabComponent,
    CardInfoComponent,
    PageDescripcionComponent,
    PageCaracterizacionComponent,
    PageInventarioComponent,
    PageAnalisisComponent,
    DetalleCaracterizacionComponent,
    AnalisisButtonComponent,
    WelcomeTextComponent,
    PageWelcomeComponent,
    PageHomeComponent,
    MainNavigationComponent,
    ContextoComponent,
    ViajeComponent,
    SentimientoComponent,
    EmocionComponent,
    DendrogramaComponent,

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule,
    ChartModule,
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

