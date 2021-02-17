import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import {Router} from '@angular/router';
import {Producto} from '../../Modelo/Producto'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
 

  constructor(private service:ServiceService, private router:Router) { }
  producto!:Producto;

  ngOnInit(){
    this.service.getProducto();
  }

}
