import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import {Cliente} from 'src/app/Modelo/Cliente'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private router:Router, private service:ServiceService) { }
  cliente:Cliente=new Cliente();
  ngOnInit(): void {
  }

  GuardarCliente(){
    console.log(this.cliente)
    this.service.CreateCliente(this.cliente)
    .subscribe(data=>{
      alert("Se agrego con exito");
      this.router.navigate(["registrar"]);

    })
  }

}
