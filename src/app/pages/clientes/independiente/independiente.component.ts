import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../../services/centro-medico/centro-medico.service';
import {CONSULTORIO, HOSPITAL_BASICO} from '../../../config/config';

@Component({
  selector: 'app-independiente',
  templateUrl: './independiente.component.html',
  styleUrls: ['./independiente.component.css']
})
export class IndependienteComponent implements OnInit, OnDestroy {
  suscripciones = new Array();
  isAlive = true;

  constructor(public _suscripcionesService: SuscripcionesService) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  loadData() {
    this._suscripcionesService.getAllSuscripciones(CONSULTORIO)
      .subscribe(
        (res: any) => {
          this.suscripciones = res;
          console.log(res);
        }
      );
  }
}
