import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContentComponent } from './content/content.component';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { DataTableComponent } from './data-table/data-table.component';
import { FuentesComponent } from './fuentes/fuentes.component';
import { AnalisisComponent } from './analisis/analisis.component';
import { ChartPieComponent } from './chart-pie/chart-pie.component';
import { FiltrarInfoService } from './filtrar-info.service';


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

  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    FormsModule
  ],
  providers: [FiltrarInfoService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
