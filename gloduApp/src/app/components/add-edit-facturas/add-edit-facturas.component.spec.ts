import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditFacturasComponent } from './add-edit-facturas.component';

describe('AddEditFacturasComponent', () => {
  let component: AddEditFacturasComponent;
  let fixture: ComponentFixture<AddEditFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
