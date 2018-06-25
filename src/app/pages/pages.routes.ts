import {RouterModule, Routes} from '@angular/router';
import {PagesComponent} from './pages.component';
import {SuscripcionComponent} from './suscripcion/suscripcion.component';
import {IndependienteComponent} from './clientes/independiente/independiente.component';
import {ClinicaComponent} from './clientes/clinica/clinica.component';
import {HospitalBasicoComponent} from './clientes/hospital-basico/hospital-basico.component';
import {HospitalPremiumComponent} from './clientes/hospital-premium/hospital-premium.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      // {path: 'dashboard', component: DashboardComponent},
      {path: 'suscripcion', component: SuscripcionComponent, data: {titulo: 'Suscripción', subtitle: 'Nueva suscripcion'}},
      {path: 'independiente', component: IndependienteComponent, data: {titulo: 'Clientes', subtitle: 'Profesionista independiente'}},
      {path: 'clinica', component: ClinicaComponent, data: {titulo: 'Clientes', subtitle: 'Clinica'}},
      {path: 'hospital-basico', component: HospitalBasicoComponent, data: {titulo: 'Clientes', subtitle: 'Hospital basico'}},
      {path: 'hospital-premium', component: HospitalPremiumComponent, data: {titulo: 'Clientes', subtitle: 'Hospital premium'}},
      {path: '', redirectTo: '/suscripcion', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
