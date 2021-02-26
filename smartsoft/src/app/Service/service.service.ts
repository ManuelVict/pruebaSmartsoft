import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Producto} from '../Modelo/Producto';
import {Factura} from '../Modelo/Factura'
import {Cliente} from '../Modelo/Cliente'
import {Detalle} from '../Modelo/Detalle'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 

  constructor(private http:HttpClient) { }

  Url='http://127.0.0.1:8080/productos';
  UrlFactura='http://127.0.0.1:8080/facturas'
  urlCliente='http://127.0.0.1:8080/cliente'
  urlDetalle='http://127.0.0.1:8080/detalle'

  getProducto(){
    return this.http.get<Producto>(this.Url);
  }

  createProducto(producto:Producto){
    return this.http.post<Producto>(this.Url,producto);
  }

  getProductoId(id:number){
    return this.http.get<Producto>(this.Url+"/"+id);
  }
  CreateFactura(factura:Factura){
    return this.http.post<Factura>(this.UrlFactura,factura)
  }
  CreateCliente(cliente:Cliente){
    return this.http.post<Factura>(this.urlCliente,cliente)
  }
  CreateDetalle(detalle:Detalle){
    return this.http.post<Factura>(this.urlDetalle,detalle)
  }
  getFacturas(){
    return this.http.get<Factura>(this.UrlFactura);
  }

  updateStock(producto:Producto){
    console.log(this.http.put<Producto>(this.Url+"/"+producto.id,producto))
    return this.http.put<Producto>(this.Url+"/"+producto.id,producto)
  }
}
