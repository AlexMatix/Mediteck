import {Component, Input, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormControl, FormGroup} from '@angular/forms';
import {SuscripcionesService} from '../../services/suscripciones/suscripciones.service';
import {CentroMedicoService} from '../../services/centro-medico/centro-medico.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-modificar-suscripcion',
  templateUrl: './modificar-suscripcion.component.html',
  styleUrls: ['./modificar-suscripcion.component.css']
})
export class ModificarSuscripcionComponent implements OnInit {

  @Input() suscripcion: any;
  @Input() centroMedico: any;
  closeResult: string;
  formCentroMedico: FormGroup;
  formSuscripcion: FormGroup;
  isCorrect = false;
  mensaje = 'Datos de centro medico';

  tipo_centro_medico = [
    {value: 'CONSULTORIO', viewValue: 'CONSULTORIO'},
    {value: 'CLINICA', viewValue: 'CLINICA'},
    {value: 'HOSPITAL', viewValue: 'HOSPITAL'}
  ]

  tipo_suscripcion = [
    {value: 0, viewValue: 'CONSULTORIO'},
    {value: 1, viewValue: 'CLINICA'},
    {value: 2, viewValue: 'HOSPITAL BASICO'},
    {value: 3, viewValue: 'HOSPITAL PREMIUM'}
  ]

  constructor(private _centroMedicoService: CentroMedicoService,
              private _suscripcionesService: SuscripcionesService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.crearFormaCentroMedico();
    this.crearFormaSuscripcion();
  }

  crearFormaCentroMedico() {
    this.formCentroMedico = new FormGroup({
      'Nombre': new FormControl('', []),
      'Direccion': new FormControl('', []),
      'Tipo_centro_medico': new FormControl('', [])
    });
  }

  crearFormaSuscripcion() {
    this.formSuscripcion = new FormGroup({
      'Nombre_persona': new FormControl('', []),
      'Apellidos_persona': new FormControl('', []),
      'Fecha_inscripcion': new FormControl('', []),
      'Cedula': new FormControl('', []),
      'email': new FormControl('', []),
      'Tipo_suscripcion': new FormControl('', [])
    });
  }

  open(content) {
    this.isCorrect = false;
    console.log(this.centroMedico);
    console.log(this.suscripcion);
    this.loadData2FormCentroMedico(this.centroMedico);
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  loadData2FormCentroMedico(centroMedico: any) {
    console.log(centroMedico);
    this.formCentroMedico.controls['Nombre'].setValue(centroMedico[0].Nombre);
    this.formCentroMedico.controls['Direccion'].setValue(centroMedico[0].Direccion);
    this.formCentroMedico.controls['Tipo_centro_medico'].setValue(centroMedico[0].Tipo_centro_medico);
  }

  loadData2FormSuscripcion(suscripcion: any) {
    console.log(suscripcion);
    this.formSuscripcion.controls['Nombre_persona'].setValue(suscripcion[0].Nombre_persona);
    this.formSuscripcion.controls['Apellidos_persona'].setValue(suscripcion[0].Apellidos_persona);
    this.formSuscripcion.controls['Fecha_inscripcion'].setValue(suscripcion[0].Fecha_inscripcion);
    this.formSuscripcion.controls['Cedula'].setValue(suscripcion[0].Cedula);
    this.formSuscripcion.controls['email'].setValue(suscripcion[0].email);
    this.formSuscripcion.controls['Tipo_suscripcion'].setValue(suscripcion[0].Tipo_suscripcion);
  }

  modificarCentroMedico() {
    // this._centroMedicoService.postCentroMedico(this.formCentroMedico.value)
    //   .subscribe((res: any) => {
    //       this.idCentroMedico = res.data.id;
    //       console.log(res);
    //       this.isCorrect = !this.isCorrect;
    //     },
    //     (error: HttpErrorResponse) => {
    //       if (error.status !== 201) {
    //         swal('Error al dar de alta', 'Algo ha salido mal', 'error');
    //       }
    //     });
    this.isCorrect = !this.isCorrect;
    this.mensaje = 'Datos de suscripción'
    this.loadData2FormSuscripcion(this.suscripcion);
    console.log(this.formCentroMedico.value);
  }

  modificarSuscripcion() {
    // this.suscripcion = this.formSuscripcion.value;
    // this.suscripcion.Tipo_suscripcion = Number(this.suscripcion.Tipo_suscripcion);
    // this.suscripcion.idCentro_medico = this.idCentroMedico;
    // console.log(this.suscripcion);
    // this._suscripcionesService.postCentroMedico(this.suscripcion)
    //   .subscribe((res: any) => {
    //       swal('Suscripcion agregada', 'Suscripcion agregada con exito', 'success');
    //     },
    //     (error: HttpErrorResponse) => {
    //       if (error.status !== 201) {
    //         swal('Error al dar de alta', 'Algo ha salido mal', 'error');
    //       }
    //     });
    this.isCorrect = !this.isCorrect;
  }

}
