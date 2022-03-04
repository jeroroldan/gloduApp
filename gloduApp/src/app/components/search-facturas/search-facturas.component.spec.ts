import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFacturasComponent } from './search-facturas.component';

describe('SearchFacturasComponent', () => {
  let component: SearchFacturasComponent;
  let fixture: ComponentFixture<SearchFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFacturasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
