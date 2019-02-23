import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from '../../config/config';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {CentroMedico} from '../../interfaces/centroMedico.interface';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CentroMedicoService {
  centroMedicoURL = URL_SERVICIOS + '/centro-medico';
  centroMedico: CentroMedico;

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.centroMedicoURL);
  }

  public getCentroMedico(key$: string): Observable<CentroMedico> {
    const url = `${this.centroMedicoURL}/${key$}`
    return this.http.get<CentroMedico>(url)
      .map( (centroMedico: any) => {
        this.centroMedico = centroMedico.data;
        return this.centroMedico;
      });
  }

  postCentroMedico(centroMedico: FormGroup) {
    const body = JSON.stringify(centroMedico);
    console.log(body);
    return this.http.post(this.centroMedicoURL, body, {headers: {'Content-Type': 'application/json'}});
  }

  putCentroMedico(centroMedico, key) {
    const url = `${this.centroMedicoURL}/${key}`
    const body = JSON.stringify(centroMedico);
    console.log(body);
    return this.http.put(url, body, {headers: {'Content-Type': 'application/json'}});
  }

  private extractObject(res: Response): Object {
    const data: any = res.json();
    return data || {};
  }

}
