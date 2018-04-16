import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES/* , { useHash: true } */);
