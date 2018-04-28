import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CentroMedicoService} from '../../services/centro-medico/centro-medico.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {

  forma: FormGroup;

  constructor(_centroMedicoService: CentroMedicoService) {
    this.crearForma();
  }

  ngOnInit() {
  }

  crearForma() {
    this.forma = new FormGroup({
      'nombre': new FormControl('', []),
      'direccion': new FormControl('', []),
      'estado': new FormControl('', []),
      'suscripcion': new FormGroup({
        'nombrePersona': new FormControl('', []),
        'apellidos': new FormControl('', []),
        'fecha_inscripcion': new FormControl('', []),
        'cedula_profesional': new FormControl('', []),
        'password': new FormControl('', []),
      })
    });
  }

  agregar() {
    console.log(this.forma.value);
  }
}
