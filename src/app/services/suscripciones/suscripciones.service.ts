import { Injectable } from '@angular/core';
import {URL_SERVICIOS} from '../../config/config';
import {HttpClient} from '@angular/common/http';
import {FormGroup} from '@angular/forms';
import {Suscripcion} from '../../interfaces/suscripcion.interface';
import {CentroMedicoService} from '../centro-medico/centro-medico.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';


@Injectable()
export class SuscripcionesService {
  newSuscripcionURL = URL_SERVICIOS + '/nueva-suscripcion';
  suscripcionesURL = URL_SERVICIOS + '/suscripciones-centros-medicos';


  constructor(private http: HttpClient,
              private _centroMedicoService: CentroMedicoService) { }

  getAllSuscripciones(tipo: number) {
    const url = `${this.suscripcionesURL}/${tipo}`;
    console.log(url);
    return this.http.get(url);
  }

  getSuscripcion(id: number) {
    return this.http.get(this.suscripcionesURL);
  }

  postSuscripcion(suscripcion: any) {
    const body = JSON.stringify(suscripcion);
    return this.http.post(this.newSuscripcionURL, body, {headers: {'Content-Type': 'application/json'}});
  }

  putSuscripcion(suscripcion, key) {
    const url = `${URL_SERVICIOS}/suscripciones/${key}`
    const body = JSON.stringify(suscripcion);
    console.log(body);
    return this.http.put(url, body, {headers: {'Content-Type': 'application/json'}});
  }

  deleteSuscripcion(key: any) {
    const url = `${this.suscripcionesURL}/${key}`
    swal( {
      title: '¿Estas seguro?',
      text: 'Una vez eliminada la suscripcion, no se tendra acceso al servicio.',
      icon: 'warning',
      buttons: {
        cancel: true,
        confirm: true
      },
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this.http.delete(url)
            .subscribe(
              res => {
                swal('Suscripcion eliminada exitosamente', {
                  icon: 'success',
                });
              },
              error => {
                swal('Algo salio mal', 'No se pudo eliminar esta suscripción', {
                  icon: 'error',
                });
              }
            );
        } else {
          swal('Casi lo borras!');
        }
      });
  }

  getSuscripcionesWithCentroMedico(tipo) {
    return Observable.forkJoin(
      this.getAllSuscripciones(tipo)
        .map( (res: any) => {
          let suscripciones = res.data;
          return suscripciones;
        }),
      this._centroMedicoService.getAll()
        .map( (res: any) => {
          let centroMedico = res.data;
          return centroMedico;
        })
    ).map( res => this.join( res[0], res[1]));
  }

  join(suscripciones, centrosMedicos) {
    return suscripciones.map(suscripcion => {
      return centrosMedicos
        .filter(centroMedico => centroMedico.id === suscripcion.idCentro_medico)
        .map(centroMedico => {
          return {
            suscripcion: suscripcion,
            centroMedico: centroMedico
          }
        })
    }).reduce((a, b) => {
      return a.concat(b);
    }, []);

  }

}
