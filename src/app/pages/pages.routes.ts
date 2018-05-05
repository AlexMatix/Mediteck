import {RouterModule, Routes} from '@angular/router';
import {PacientesComponent} from './pacientes/pacientes.component';
import {PagesComponent} from './pages.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CentroMedicoComponent} from './centro-medico/centro-medico.component';
import {SuscripcionComponent} from './suscripcion/suscripcion.component';
import {ClientesComponent} from './clientes/clientes.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'paciente', component: PacientesComponent},
      {path: 'centro-medico', component: CentroMedicoComponent},
      {path: 'suscripcion', component: SuscripcionComponent},
      {path: 'clientes', component: ClientesComponent},
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
