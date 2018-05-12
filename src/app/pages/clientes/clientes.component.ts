import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CentroMedicoService} from '../../services/centro-medico/centro-medico.service';
import {SuscripcionesService} from '../../services/suscripciones/suscripciones.service';
import {CLINICA} from '../../config/config';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  suscripciones: any[] = [];

  constructor(private _suscripcionesService: SuscripcionesService,
              private _centroMedicoService: CentroMedicoService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._suscripcionesService.getAllSuscripciones(CLINICA)
      .subscribe( (data: any) => {
        this.suscripciones = data.data;
        console.log(this.suscripciones);
        this._centroMedicoService.getAll()
          .subscribe( (res: any) => {
            console.log(res);
            for (let i = 0; i < res.data.length; i++) {
              console.log(res.data[i])
              this.suscripciones[i].idCentro_medico = res.data[i].Nombre;
            }
          });
      });
  }
}
