import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {PagesModule} from './pages/pages.module';
import { LoginComponent } from './login/login.component';
import {APP_ROUTING} from './app.routes';
import {ServiceModule} from './services/service.module';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModificarSuscripcionComponent } from './modals/modificar-suscripcion/modificar-suscripcion.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    APP_ROUTING,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
