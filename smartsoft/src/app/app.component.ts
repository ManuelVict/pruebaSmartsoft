import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'smartsoft';

  constructor(private router:Router){}

  Registrar(){
    this.router.navigate(['registrar']);
  }
  CrearFactura(){
    this.router.navigate(['CrearFactura']);
  }
  Nuevo(){
    this.router.navigate(['nuevo']);
  }

}
