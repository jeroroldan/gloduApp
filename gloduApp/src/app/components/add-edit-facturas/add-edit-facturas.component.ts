import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from '../../models/factura';
import { ServicesEntitysService } from '../../services/services-entitys.service';

@Component({
  selector: 'app-add-edit-facturas',
  templateUrl: './add-edit-facturas.component.html',
  styleUrls: ['./add-edit-facturas.component.scss'],
})
export class AddEditFacturasComponent implements OnInit {
  idFactura: any;
  public action = 'Agregar';

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: ServicesEntitysService,
    private route: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      id: [],
      folio: ['', Validators.required],
      description: ['', Validators.required],
      fecha: ['', Validators.required],
      clientName: ['', Validators.required],
    });
    const idParam = 'id';
    this.idFactura = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idFactura !== undefined) {
      this.action = 'Editar';
      this.isEditFactura();
    }
  }

  save() {
    const factura: Factura = {
      id: this.myForm.get('id')?.value,
      folio: this.myForm.get('folio')?.value,
      description: this.myForm.get('description')?.value,
      fecha: this.myForm.get('fecha')?.value,
      clientName: this.myForm.get('clientName')?.value,
    };
    if (this.idFactura !== undefined) {
      this.editFactura(factura);
      this.route.navigate(['/list']);
    } else {
      this.addFactura(factura);
      this.route.navigate(['/list']);
    }
  }

  addFactura(factura: Factura) {
    this.service.addFactura(factura);
  }

  isEditFactura() {
    const facturaEdiat: Factura = this.service.getFactura(this.idFactura);
    this.myForm.patchValue({
      id: facturaEdiat.id,
      folio: facturaEdiat.folio,
      description: facturaEdiat.description,
      fecha: facturaEdiat.fecha,
      clientName: facturaEdiat.clientName,
    });
  }

  editFactura(factura: Factura) {
    this.service.editFactura(factura, this.idFactura);
    this.route.navigate(['/list']);
  }
}
