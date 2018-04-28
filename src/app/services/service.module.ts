import { NgModule } from '@angular/core';
import {SidebarService} from './shared/sidebar.service';
import {CentroMedicoService} from './centro-medico/centro-medico.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SidebarService,
    CentroMedicoService
  ],
  declarations: []
})
export class ServiceModule { }
