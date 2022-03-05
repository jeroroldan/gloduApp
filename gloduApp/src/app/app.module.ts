import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './materialModule/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListFacturasComponent } from './components/list-facturas/list-facturas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchFacturasComponent } from './components/search-facturas/search-facturas.component';
import { AddEditFacturasComponent } from './components/add-edit-facturas/add-edit-facturas.component';
import { FilterNamePipe } from './pipes/filter-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListFacturasComponent,
    NavbarComponent,
    SearchFacturasComponent,
    AddEditFacturasComponent,
    FilterNamePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
