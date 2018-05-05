import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';

@Injectable()
export class CentroMedicoService {
  centroMedicoURL = URL_SERVICIOS + '/centro-medico';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.centroMedicoURL);
  }

  getCentroMedico(key$: string) {
    let url = `${this.centroMedicoURL}/${key$}`
    return this.http.get(this.centroMedicoURL);
  }

  postCentroMedico(centroMedico: FormGroup){
    const body = JSON.stringify(centroMedico);
    return this.http.post(this.centroMedicoURL, body);
  }

}
