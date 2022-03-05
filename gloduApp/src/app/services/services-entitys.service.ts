import { Injectable } from '@angular/core';
import { Factura } from '../models/factura';
import { Clients } from '../models/clients';
import { Details } from '../models/details';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ServicesEntitysService {
  public uid: number = 0;

  listFacturas: Factura[] = [
    {
      id: this.uid,
      folio: 23,
      description: 'teclado',
      fecha: new Date(),
      clientName: 'Roberto',
    },
    {
      id: this.uid,
      folio: 24,
      description: 'monitor',
      fecha: new Date(),
      clientName: 'Alejandro',
    },
    {
      id: this.uid,
      folio: 25,
      description: 'mouse',
      fecha: new Date(),
      clientName: 'Silvina',
    },
  ];
  constructor() {}

  getFacturas() {
    return this.listFacturas.slice();
  }

  addFactura(fact: Factura) {
    this.listFacturas.unshift(fact);
  }
  deleteFactura(idx: number) {
    this.listFacturas.splice(idx, 1);
  }

  getFactura(index: number) {
    return this.listFacturas[index];
  }

  editFactura(factura: Factura, idFactura: number) {
    this.listFacturas[idFactura].id = factura.id;
    this.listFacturas[idFactura].folio = factura.folio;
    this.listFacturas[idFactura].description = factura.description;
    this.listFacturas[idFactura].fecha = factura.fecha;
    this.listFacturas[idFactura].clientName = factura.clientName;
  }
}
