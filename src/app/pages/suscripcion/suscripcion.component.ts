import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CentroMedicoService} from '../../services/centro-medico/centro-medico.service';

@Component({
  selector: 'app-suscripcion',
  templateUrl: './suscripcion.component.html',
  styleUrls: ['./suscripcion.component.css']
})
export class SuscripcionComponent implements OnInit {

  formCentroMedico: FormGroup;
  formSuscripcion: FormGroup;
  isCorrect = false;

  constructor(private _centroMedicoService: CentroMedicoService) {
    this.crearFormaCentroMedico();
    this.crearFormaSuscripcion()
  }

  ngOnInit() {
  }

  crearFormaCentroMedico() {
    this.formCentroMedico = new FormGroup({
      'Nombre': new FormControl('', []),
      'Direccion': new FormControl('', []),
      'Tipo_centro_medico': new FormControl('', []),
    });
  }

  crearFormaSuscripcion() {
    this.formSuscripcion = new FormGroup({
      'nombrePersona': new FormControl('', []),
      'apellidos': new FormControl('', []),
      'fecha_inscripcion': new FormControl('', []),
      'cedula_profesional': new FormControl('', []),
      'email': new FormControl('', [])
    });
  }


  agregarCentroMedico() {
    this._centroMedicoService.postCentroMedico(this.formCentroMedico.value)
      .subscribe(res => {
        console.log(res);
      });
    console.log(this.formCentroMedico.value);
    this.isCorrect = !this.isCorrect;
  }

  agregarSuscripcion() {
    console.log(this.formSuscripcion.value);
    this.isCorrect = !this.isCorrect;
  }
}
