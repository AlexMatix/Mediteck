import {RouterModule, Routes} from '@angular/router';
import {PacientesComponent} from './pacientes/pacientes.component';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CentroMedicoComponent} from './centro-medico/centro-medico.component';
import {SuscripcionComponent} from './suscripcion/suscripcion.component';
import {ClientesComponent} from './clientes/clientes.component';
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
      {path: 'suscripcion', component: SuscripcionComponent},
      {path: 'independiente', component: IndependienteComponent},
      {path: 'clinica', component: ClinicaComponent},
      {path: 'hospital-basico', component: HospitalBasicoComponent},
      {path: 'hospital-premium', component: HospitalPremiumComponent},
      {path: '', redirectTo: '/suscripcion', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
