import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import {Router} from '@angular/router';
import {Producto} from '../../Modelo/Producto'
import {Factura} from '../../Modelo/Factura'
import {Detalle} from '../../Modelo/Detalle'
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

var lista1 : any[]=[]
var lista : any[] =[];
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {
  modificarProducto:Producto=new Producto
  arranque :number=73
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
    var y=<HTMLInputElement> document.getElementById('cc')
    this.cedula=+y.value;
    }) 
    //this.service.getProductoId(id)      .subscribe(data=>{        alert("Se busco con exito");           }
    //console.log(JSON.stringify(auxiliar))  
  }

  enviarFactura(){
    var ono=this.cedula;
    var fechaActual= new Date();
    this.service.CreateFactura({'num_factura':1,'id_cliente':ono,'fecha':new Date()  }) 
    .subscribe(data=>{alert("Se agrego con exito");})
    this.registrarDetalle()


  }

  registrarDetalle(){
    
    let aux=this.service.getFacturas()
    aux.subscribe((resp)=>{
      console.log(resp)
    })
    var auxCantidad =<HTMLInputElement> document.getElementById('cn')
    this.arranque=this.arranque+1
    for(var i in lista){
      this.service.CreateDetalle({ 'id':1,'id_factura':this.arranque,'id_producto':lista[i].id_producto,'cantidad':+auxCantidad,'precio':lista[i].precio })
      .subscribe(data=>{})
      console.log(lista.length)
      let obtProducto=this.service.getProductoId(lista[i].id_producto)
      let aux= obtProducto.subscribe((resp)=> 
        {
          lista1.push(resp)       
          console.log(lista1)
          this.service.updateStock({'id':lista1[i].id_producto, 'nombre':lista1[i].nombre, 'precio':lista1[i].precio, 'stock':2})
          console.log( this.service.updateStock({'id':lista1[i].id_producto, 'nombre':lista1[i].nombre, 'precio':lista1[i].precio, 'stock':2}))
 
        })
        
    
    }
    
  }

  editar(producto:Producto){
    console.log(producto.id)
   this.service.updateStock({'id':producto.id, 'nombre':producto.nombre, 'precio':producto.precio, 'stock':2})
  }

}

