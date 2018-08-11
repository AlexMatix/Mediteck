import {
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../../services/centro-medico/centro-medico.service';
import {CLINICA, HOSPITAL_BASICO} from '../../../config/config';
import {CentroMedico} from '../../../interfaces/centroMedico.interface';
import 'rxjs/add/operator/takeWhile';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-hospital-basico',
  templateUrl: './hospital-basico.component.html',
  styleUrls: ['./hospital-basico.component.css']
})
export class HospitalBasicoComponent implements OnInit, OnDestroy {
  suscripciones = new Array();
  isAlive = true;

  constructor(public _suscripcionesService: SuscripcionesService) {
  }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  loadData() {

    this._suscripcionesService.getAllSuscripciones(HOSPITAL_BASICO)
      .subscribe(
        (res: any) => {
          this.suscripciones = res;
          console.log(res);
        }
      );
    // this._suscripcionesService.getSuscripcionesWithCentroMedico(HOSPITAL_BASICO)
    //   .takeWhile(() => this.isAlive)
    //   .subscribe(
    //     res => {
    //       this.suscripciones = res;
    //       console.log(res);
    //     }
    //   );
  }

  deleteSuscripcion(id: any) {
    this._suscripcionesService.deleteSuscripcion(id);
  }

  reload(cerrado) {
    if (cerrado) {
      this.loadData();
    }
  }
}
