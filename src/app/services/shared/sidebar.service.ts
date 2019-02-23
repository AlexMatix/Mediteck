import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Inicio',
      url: '/suscripcion'
    },
    {
      titulo: 'Consultorio',
      url: '/independiente'
    },
    {
      titulo: 'Clinica',
      url: '/clinica'
    },
    {
      titulo: 'Hospital basico',
      url: '/hospital-basico'
    },
    {
      titulo: 'Hospital premium',
      url: '/hospital-premium'
    }
  ];

  constructor() { }

}
