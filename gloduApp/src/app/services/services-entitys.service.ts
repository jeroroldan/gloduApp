import { Injectable } from '@angular/core';
import { Facturas } from '../models/facturas';
import { Clients } from '../models/clients';
import { Details } from '../models/details';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ServicesEntitysService {
  Facturas: Facturas[] = [
    {
      id: 1,
      folio: 23,
      description: 'teclado',
      fecha: new Date(),
      clientName: 'Roberto',
    },
    {
      id: 2,
      folio: 24,
      description: 'monitor',
      fecha: new Date(),
      clientName: 'Alejandro',
    },
    {
      id: 1,
      folio: 25,
      description: 'mouse',
      fecha: new Date(),
      clientName: 'Silvina',
    },
  ];

  getFacturas() {
    return this.Facturas.slice();
  }

  constructor() {}
}
