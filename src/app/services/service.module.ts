import { NgModule } from '@angular/core';
import {SidebarService} from './shared/sidebar.service';
import {CentroMedicoService} from './centro-medico/centro-medico.service';
import {HttpClientModule} from '@angular/common/http';
import {SuscripcionesService} from './suscripciones/suscripciones.service';
import {UserService} from './user/user.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SidebarService,
    CentroMedicoService,
    SuscripcionesService,
    UserService
  ],
  declarations: []
})
export class ServiceModule { }
