import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import {Router} from '@angular/router';
import {Producto} from '../../Modelo/Producto'

var lista : any[] =[];
@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {
  respuesta :any =lista;
  producto:Producto=new Producto();
  cantidad :any[]=[]

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

    }) 
    //this.service.getProductoId(id)      .subscribe(data=>{        alert("Se busco con exito");           }
    //console.log(JSON.stringify(auxiliar))  
  }



}

