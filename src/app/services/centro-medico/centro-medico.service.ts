import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CentroMedicoService {
  suscripcionURL = URL_SERVICIOS + '/profesores';

  constructor(private http: HttpClient) { }

  obtenerMaestro(clave: string) {
    const url = `${this.suscripcionURL}/${clave}`;
    return this.http.get(url);
  }

}
