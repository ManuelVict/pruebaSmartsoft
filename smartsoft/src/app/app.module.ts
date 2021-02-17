import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearFacturaComponent } from './caja/crear-factura/crear-factura.component';
import {FormsModule} from '@angular/forms';
import {ServiceService} from '../app/Service/service.service';
import {HttpClient} from '@angular/common/http';
import { RegistrarComponent } from './caja/registrar/registrar.component';
@NgModule({
  declarations: [
    AppComponent,
    CrearFacturaComponent,
    RegistrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
