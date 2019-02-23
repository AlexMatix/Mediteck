import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {URL_SERVICIOS} from '../../config/config';

@Component({
  selector: 'app-admin-plans',
  templateUrl: './admin-plans.component.html',
  styleUrls: ['./admin-plans.component.css']
})
export class AdminPlansComponent implements OnInit {

  allPlans:any;

  constructor(public http: HttpClient) {
    this.http.get(`${URL_SERVICIOS}/planc`)
    .subscribe(data => {
       this.allPlans = data;
    });
  }

  ngOnInit() {}

  delete(id) {
    swal({
      title: '¿Estas seguro?',
      text: 'Una vez eliminado el plan, no hay vuelta atras',
      icon: 'warning',
      buttons: {
        cancel: true,
        confirm: true
      },
      dangerMode: true
    })
      .then((willDelete) => {
        if (willDelete) {
          this.http.delete(`${URL_SERVICIOS}/planc/${id}`)
            .subscribe(
              res => {
                swal('Plan eliminado exitosamente', {
                  icon: 'success',
                });
              },
              error => {
                swal('Algo salio mal', 'No se pudo eliminar este plan', {
                  icon: 'error',
                });
              }
            );
        }
      });
  }

}
