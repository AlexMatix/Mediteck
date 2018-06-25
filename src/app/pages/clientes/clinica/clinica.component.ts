import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../../services/centro-medico/centro-medico.service';
import {CLINICA, HOSPITAL_BASICO} from '../../../config/config';
import 'rxjs/add/operator/takeWhile';
import {Observable} from 'rxjs/Observable';
import {CentroMedico} from '../../../interfaces/centroMedico.interface';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit, OnDestroy {
  suscripciones: any[] = [];
  centroMedico: CentroMedico;
  isAlive = true;

  constructor(private _suscripcionesService: SuscripcionesService) {}

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  loadData() {
    this._suscripcionesService.getAllSuscripciones(CLINICA)
      .subscribe(
        (res: any) => {
          this.suscripciones = res;
          console.log(res);
        }
      );
    // this._suscripcionesService.getSuscripcionesWithCentroMedico(CLINICA)
    //   .subscribe(
    //     res => {
    //       this.suscripciones = res;
    //       console.log(res);
    //     }
    //   );
  }
}
