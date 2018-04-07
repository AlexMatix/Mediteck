import {RouterModule, Routes} from '@angular/router';
import {PacientesComponent} from './pacientes/pacientes.component';
import {PagesComponent} from './pages.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: 'paciente', component: PacientesComponent},
      {path: '', redirectTo: '/paciente', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
