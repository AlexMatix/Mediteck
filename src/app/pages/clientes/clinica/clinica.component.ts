import { Component, OnInit } from '@angular/core';
import {SuscripcionesService} from '../../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../../services/centro-medico/centro-medico.service';
import {CLINICA} from '../../../config/config';

@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styleUrls: ['./clinica.component.css']
})
export class ClinicaComponent implements OnInit {
  suscripciones: any[] = [];
  centrosMedicos: any[] = [];

  constructor(private _suscripcionesService: SuscripcionesService,
              private _centroMedicoService: CentroMedicoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._suscripcionesService.getAllSuscripciones(CLINICA)
      .subscribe( (data: any) => {
        this._centroMedicoService.getAll()
          .subscribe( (res: any) => {
            this.suscripciones = data.data;
            this.centrosMedicos = res.data;
            console.log(this.centrosMedicos);
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
