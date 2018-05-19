import {Component, OnDestroy, OnInit} from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {HOSPITAL_BASICO, HOSPITAL_PREMIUM} from '../../../config/config';

@Component({
  selector: 'app-hospital-premium',
  templateUrl: './hospital-premium.component.html',
  styleUrls: ['./hospital-premium.component.css']
})
export class HospitalPremiumComponent implements OnInit, OnDestroy {
  isAlive = true;
  suscripciones: any[] = [];

  constructor(private _suscripcionesService: SuscripcionesService) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy(): void {
    this.isAlive = false;
  }

  loadData() {
    this._suscripcionesService.getSuscripcionesWithCentroMedico(HOSPITAL_PREMIUM)
      .takeWhile(() => this.isAlive)
      .subscribe(
        res => {
          this.suscripciones = res;
          console.log(res);
        }
      );
  }
}
