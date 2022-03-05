import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListFacturasComponent } from './components/list-facturas/list-facturas.component';
import { AddEditFacturasComponent } from './components/add-edit-facturas/add-edit-facturas.component';
import { SearchFacturasComponent } from './components/search-facturas/search-facturas.component';

const routes: Routes = [
  { path: '', component: ListFacturasComponent, pathMatch: 'full' },
  { path: 'add', component: AddEditFacturasComponent },
  { path: 'searchFacturas', component: SearchFacturasComponent },
  { path: 'edit/:id', component: AddEditFacturasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
