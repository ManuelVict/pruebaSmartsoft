import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Producto} from 'src/app/Modelo/Producto'
@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {

  producto:Producto=new Producto();


  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {

  }
  Guardar(){
    this.service.createProducto(this.producto)
    .subscribe(data=>{
      alert("Se agrego con exito");
      //this.router.navigate(["lsitar"]);

    })
  }

}
