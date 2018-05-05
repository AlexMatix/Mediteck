import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SuscripcionesService {
  suscripcionesURL = URL_SERVICIOS + '/suscripciones'


  constructor(private http: HttpClient) { }

  getAllSuscripciones() {
    return this.http.get(this.suscripcionesURL);
  }

}
