import { Component, OnInit } from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../../services/centro-medico/centro-medico.service';
import {HOSPITAL_PREMIUM} from '../../../config/config';

@Component({
  selector: 'app-hospital-premium',
  templateUrl: './hospital-premium.component.html',
  styleUrls: ['./hospital-premium.component.css']
})
export class HospitalPremiumComponent implements OnInit {
  suscripciones: any[] = [];
  centrosMedicos: any[] = [];

  constructor(private _suscripcionesService: SuscripcionesService,
              private _centroMedicoService: CentroMedicoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._suscripcionesService.getAllSuscripciones(HOSPITAL_PREMIUM)
      .subscribe( (data: any) => {
        this.suscripciones = data.data;
        console.log(this.suscripciones);
        this._centroMedicoService.getAll()
          .subscribe( (res: any) => {
            this.centrosMedicos = res.data;
            console.log(res);
            for (let i = 0; i < data.data.length; i++) {
              console.log(res.data[i].id)
              for (let j = 0; j < res.data.length; j++) {
                if (res.data[j].id === this.suscripciones[i].idCentro_medico) {
                  this.suscripciones[i].idCentro_medico = res.data[j].Nombre;
                  console.log('Holi que hace')
                }
              }
            }
          });
      });
  }
}
