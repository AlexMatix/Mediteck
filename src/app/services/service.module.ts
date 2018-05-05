import { NgModule } from '@angular/core';
import {SidebarService} from './shared/sidebar.service';
import {CentroMedicoService} from './centro-medico/centro-medico.service';
import {HttpClientModule} from '@angular/common/http';
import {SuscripcionesService} from './suscripciones/suscripciones.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SidebarService,
    CentroMedicoService,
    SuscripcionesService
  ],
  declarations: []
})
export class ServiceModule { }
