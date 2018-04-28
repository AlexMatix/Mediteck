import { Injectable } from '@angular/core';

@Injectable()
export class SidebarService {

  menu: any = [
    {
      titulo: 'Inicio',
      url: '/suscripcion'
    },
    {
      titulo: 'Profesionista independiente',
      url: '/centro-medico'
    },
    {
      titulo: 'Clinica',
      url: '/almacen'
    },
    {
      titulo: 'Hospital basico',
      url: '/clientes'
    },
    {
      titulo: 'Hospital premium',
      url: '/configuracion'
    }
  ];

  constructor() { }

}
