import { Component, OnInit } from '@angular/core';
import { ServicesEntitysService } from '../../services/services-entitys.service';
import { Facturas } from '../../models/facturas';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-list-facturas',
  templateUrl: './list-facturas.component.html',
  styleUrls: ['./list-facturas.component.scss'],
})
export class ListFacturasComponent implements OnInit {
  selectedValue: any;
  selectedCar: any;

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  cars = [
    { value: 'volvo', viewValue: 'Volvo' },
    { value: 'saab', viewValue: 'Saab' },
    { value: 'mercedes', viewValue: 'Mercedes' },
  ];

  public facturas: Facturas[] = [];
  dataSource: any;

  displayedColumns: string[] = [
    'id',
    'folio',
    'description',
    'fecha',
    'clientName',
    'acciones',
  ];

  constructor(private service: ServicesEntitysService) {}

  ngOnInit(): void {
    this.getFactur();
  }

  getFactur() {
    this.facturas = this.service.getFacturas();
    this.dataSource = this.facturas;
  }
}
