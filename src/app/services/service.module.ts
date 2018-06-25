import { NgModule } from '@angular/core';
import {SidebarService} from './shared/sidebar.service';
import {CentroMedicoService} from './centro-medico/centro-medico.service';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SuscripcionesService} from './suscripciones/suscripciones.service';
import {UserService} from './user/user.service';
import {AuthService} from './auth/auth.service';
import {TokenInterceptorService} from './auth/token-interceptor.service';
import {JwtInterceptorService} from './auth/jwt-interceptor.service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SidebarService,
    CentroMedicoService,
    SuscripcionesService,
    UserService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    }
  ],
  declarations: []
})
export class ServiceModule { }
