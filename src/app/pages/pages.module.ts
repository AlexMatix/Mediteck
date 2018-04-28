import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PacientesComponent} from './pacientes/pacientes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.routes';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {LeftsidebarComponent} from '../shared/leftsidebar/leftsidebar.component';
import {BreadcrumbsComponent} from '../shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CentroMedicoComponent } from './centro-medico/centro-medico.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import {ServiceModule} from '../services/service.module';


@NgModule({
  declarations: [
    PagesComponent,
    PacientesComponent,
    NavbarComponent,
    FooterComponent,
    LeftsidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    CentroMedicoComponent,
    SuscripcionComponent,
  ],
  exports: [],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES
  ]
}) export class PagesModule {}
