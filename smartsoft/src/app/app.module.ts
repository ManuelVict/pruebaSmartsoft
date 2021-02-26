import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearFacturaComponent } from './caja/crear-factura/crear-factura.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClientModule} from '@angular/common/http';
import { RegistrarComponent } from './caja/registrar/registrar.component';
import { NuevoComponent } from './caja/nuevo/nuevo.component';
import { ClienteComponent } from './caja/cliente/cliente.component';
@NgModule({
  declarations: [
    AppComponent,
    CrearFacturaComponent,
    RegistrarComponent,
    NuevoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
