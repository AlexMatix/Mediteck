import {NgModule} from '@angular/core';
import {PagesComponent} from './pages.component';
import {PacientesComponent} from './pacientes/pacientes.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {PAGES_ROUTES} from './pages.routes';
import {NavbarComponent} from '../shared/navbar/navbar.component';
import {FooterComponent} from '../shared/footer/footer.component';


@NgModule({
  declarations: [
    PagesComponent,
    PacientesComponent,
    NavbarComponent,
    FooterComponent
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
