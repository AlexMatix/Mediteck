import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Suscripcion} from '../../interfaces/suscripcion.interface';

@Injectable()
export class SuscripcionesService {
  suscripcionesURL = URL_SERVICIOS + '/suscripciones';


  constructor(private http: HttpClient) { }

  getAllSuscripciones(tipo: number) {
    const url = `${this.suscripcionesURL}?tipo=${tipo}`;
    console.log(url);
    return this.http.get(url);
  }

  getSuscripcion(id:number) {
    return this.http.get(this.suscripcionesURL);
  }

  postCentroMedico(suscripcion: Suscripcion) {
    const body = JSON.stringify(suscripcion);
    return this.http.post(this.suscripcionesURL, body, {headers: {'Content-Type': 'application/json'}});
  }
}
