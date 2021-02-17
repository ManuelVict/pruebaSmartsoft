import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearFacturaComponent } from './caja/crear-factura/crear-factura.component';
import { RegistrarComponent } from './caja/registrar/registrar.component';

const routes: Routes = [
  {path:'registrar', component:RegistrarComponent},
  {path:'CrearFactura',component:CrearFacturaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
