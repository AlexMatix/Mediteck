import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.routes';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {FooterComponent} from '../shared/footer/footer.component';
import {LeftsidebarComponent} from '../shared/leftsidebar/leftsidebar.component';
import {BreadcrumbsComponent} from '../shared/breadcrumbs/breadcrumbs.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuscripcionComponent } from './suscripcion/suscripcion.component';
import {ServiceModule} from '../services/service.module';
import { ClientesComponent } from './clientes/clientes.component';
import { IndependienteComponent } from './clientes/independiente/independiente.component';
import { ClinicaComponent } from './clientes/clinica/clinica.component';
import { HospitalBasicoComponent } from './clientes/hospital-basico/hospital-basico.component';
import { HospitalPremiumComponent } from './clientes/hospital-premium/hospital-premium.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ModificarSuscripcionComponent} from '../modals/modificar-suscripcion/modificar-suscripcion.component';
import {UppercaseDirective} from '../directives/change-uppercase.directive';
import {AdminPlansComponent} from './admin-plans/admin-plans.component';
import {ModalsModule} from '../modals/modals.module';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PAGES_ROUTES,
    NgbModule,
    ModalsModule
  ],
  declarations: [
    PagesComponent,
    NavbarComponent,
    FooterComponent,
    LeftsidebarComponent,
    BreadcrumbsComponent,
    DashboardComponent,
    SuscripcionComponent,
    ClientesComponent,
    IndependienteComponent,
    ClinicaComponent,
    HospitalBasicoComponent,
    HospitalPremiumComponent,
    ModificarSuscripcionComponent,
    AdminPlansComponent,
    UppercaseDirective
  ],
  exports: [
    UppercaseDirective
  ]
}) export class PagesModule {}
