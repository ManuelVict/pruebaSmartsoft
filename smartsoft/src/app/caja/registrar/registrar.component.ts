import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import {Router} from '@angular/router';
import {Producto} from '../../Modelo/Producto'
import {Factura} from '../../Modelo/Factura'
import {Detalle} from '../../Modelo/Detalle'


var lista : any[] =[];
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {
  respuesta :any =lista;
  producto:Producto=new Producto();
  factura:Factura=new Factura();
  detalle:Detalle=new Detalle();
  cantidad :any[]=[]
  cedula:number=0
  apoyo:number=11

  sx:Factura={
    'num_factura':3,
    'id_cliente':1,
    'fecha':new Date(),
  }

  

  constructor(private service:ServiceService, private router:Router) { }
  
  ngOnInit(){

    this.service.getProducto();

  }

  registrar(id:number){

    var auxiliar = this.service.getProductoId(id);
    var x =<HTMLInputElement> document.getElementById('cn')
    auxiliar.subscribe((resp) => {
    resp.stock=+x.value;
    lista.push(resp);
    console.log(lista)
    var y=<HTMLInputElement> document.getElementById('cc')
    this.cedula=+y.value;

    }) 
    //this.service.getProductoId(id)      .subscribe(data=>{        alert("Se busco con exito");           }
    //console.log(JSON.stringify(auxiliar))  
  }

  enviarFactura(){

    var ono=4;
    var fechaActual= new Date();
    console.log(this.sx)
    this.service.CreateFactura(this.sx)
    .subscribe(data=>{
      alert("Se agrego con exito");
      //this.router.navigate(["lsitar"]);

    })



}

}

