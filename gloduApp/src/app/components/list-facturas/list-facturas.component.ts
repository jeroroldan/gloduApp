import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ServicesEntitysService } from '../../services/services-entitys.service';
import { Factura } from '../../models/factura';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-list-facturas',
  templateUrl: './list-facturas.component.html',
  styleUrls: ['./list-facturas.component.scss'],
})
export class ListFacturasComponent implements OnInit {
  public facturas: Factura[] = [];
  public filterDates: Factura[] = [];
  filterSend = '';
  filterDate = '';

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  selectedValue: any;
  selectedCar: any;

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  constructor(private service: ServicesEntitysService) {}

  ngOnInit(): void {
    this.getFactur();
  }

  filterByDate() {
    this.facturas = this.service.getFacturas();
    if (
      this.range.controls.start.valid &&
      this.range.controls.end.valid &&
      this.range.value.start != null &&
      this.range.value.end
    ) {
      this.filterDates = this.facturas.filter((factura) => {
        if (
          factura.fecha.getTime() >=
            this.range.controls.start.value.getTime() &&
          factura.fecha.getTime() <= this.range.controls.end.value.getTime()
        ) {
          this.facturas = this.filterDates;
        }
      });
    } else {
      this.facturas = [];
    }
  }

  removeFilter() {
    this.range.controls.start.reset();
    this.range.controls.end.reset();
  }

  getFactur() {
    this.facturas = this.service.getFacturas();
  }
  deleteFactura(idx: number) {
    this.service.deleteFactura(idx);
    this.getFactur();
    console.log(idx);
  }
}
