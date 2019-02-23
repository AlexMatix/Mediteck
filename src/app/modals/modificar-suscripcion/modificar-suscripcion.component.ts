import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
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
  @Output() cerrado = new EventEmitter();
  private modalRef: NgbModalRef;
  closeResult: string;
  formCentroMedico: FormGroup;
  formSuscripcion: FormGroup;
  isCorrect = false;
  mensaje = 'Datos de centro medico';

  tipo_centro_medico = [
    {value: '0', viewValue: 'CONSULTORIO'},
    {value: '1', viewValue: 'CLINICA'},
    {value: '2', viewValue: 'HOSPITAL'}
  ];

  tipo_suscripcion = [
    {value: 0, viewValue: 'CONSULTORIO'},
    {value: 1, viewValue: 'CLINICA'},
    {value: 2, viewValue: 'HOSPITAL BASICO'},
    {value: 3, viewValue: 'HOSPITAL PREMIUM'}
  ];

  constructor(private _centroMedicoService: CentroMedicoService,
              private _suscripcionesService: SuscripcionesService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.crearFormaSuscripcion();
  }

  crearFormaSuscripcion() {
    this.formSuscripcion = new FormGroup({
      'Nombre': new FormControl(),
      'Direccion': new FormControl('', []),
      'Tipo_centro_medico': new FormControl('', []),
      'Nombre_persona': new FormControl('', []),
      'Apellidos_persona': new FormControl('', []),
      'Fecha_inscripcion': new FormControl('', []),
      'Cedula': new FormControl('', []),
      'Tipo_suscripcion': new FormControl('', [])
    });
  }

  open(content) {
    this.isCorrect = false;
    // console.log(this.centroMedico);
    console.log(this.suscripcion);
    this.loadData2FormSuscripcion(this.suscripcion);
    this.modalRef = this.modalService.open(content);
    this.modalRef.result.then((result) => {
      if ( result === 1 ) {
        swal('Paciente actualizado', 'Paciente actualizado con exito', 'success');
        this.cerrado.emit(true);
      } else if (result === 2) {
        swal('Algo malo ha ocurrido', 'Error al actualizar paciente', 'error');
      }
      console.log(result);
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
    this.formCentroMedico.controls['Nombre'].setValue(centroMedico.Nombre);
    this.formCentroMedico.controls['Direccion'].setValue(centroMedico.Direccion);
    this.formCentroMedico.controls['Tipo_centro_medico'].setValue(centroMedico.Tipo_centro_medico);
  }

  loadData2FormSuscripcion(suscripcion: any) {
    console.log(suscripcion);
    this.formSuscripcion.controls['Nombre'].setValue(suscripcion.Nombre);
    this.formSuscripcion.controls['Direccion'].setValue(suscripcion.Direccion);
    this.formSuscripcion.controls['Tipo_centro_medico'].setValue(suscripcion.Tipo_centro_medico);
    this.formSuscripcion.controls['Nombre_persona'].setValue(suscripcion.Nombre_persona);
    this.formSuscripcion.controls['Apellidos_persona'].setValue(suscripcion.Apellidos_persona);
    this.formSuscripcion.controls['Fecha_inscripcion'].setValue(suscripcion.Fecha_inscripcion);
    this.formSuscripcion.controls['Cedula'].setValue(suscripcion.Cedula);
    this.formSuscripcion.controls['Tipo_suscripcion'].setValue(suscripcion.Tipo_suscripcion);
  }

  modificarCentroMedico() {
    this._centroMedicoService.putCentroMedico(this.formCentroMedico.value, this.suscripcion.idCentro_medico)
      .subscribe((res: any) => {
          console.log(res);
          this.isCorrect = !this.isCorrect;
        },
        (error: HttpErrorResponse) => {
          if (error.status !== 201) {
            swal('Error al actualizar los datos', 'Algo ha salido mal', 'error');
          }
        });
    this.mensaje = 'Datos de suscripción'
    this.loadData2FormSuscripcion(this.suscripcion.suscripcion);
    console.log(this.formCentroMedico.value);
  }

  modificarSuscripcion() {
    // this.suscripcion.Tipo_suscripcion = Number(this.suscripcion.Tipo_suscripcion);
    // this.suscripcion.idCentro_medico = this.idCentroMedico;
    console.log(this.suscripcion);
    this._suscripcionesService.putSuscripcion(this.formSuscripcion.value, this.suscripcion.idSuscripcion)
      .subscribe((res: any) => {
          this.modalRef.close(1);
          swal('Suscripcion modificada', 'Suscripcion modificada con exito', 'success');
        },
        (error: HttpErrorResponse) => {
          if (error.status !== 201) {
            this.modalRef.close();
            swal('Error al dar de alta', 'Algo ha salido mal', 'error');
          }
        });
  }



}
