package com.smart.back;

import javax.persistence.*;

@Entity
@Table(name="Detalle")
public class Detalle {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="num_detalle")
    private int num_detalle;
    @Column(name="id_factura")
    private int id_factura;
    @Column(name="id_producto")
    private int id_producto;
    @Column(name="cantidad")
    private int cantidad;
    @Column(name="precio")
    private float precio;

    public int getNum_detalle() {
        return num_detalle;
    }

    public void setNum_detalle(int num_detalle) {
        this.num_detalle = num_detalle;
    }

    public int getId_factura() {
        return id_factura;
    }

    public void setId_factura(int id_factura) {
        this.id_factura = id_factura;
    }

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public int getCantidad() {
        return cantidad;
    }

    public void setCantidad(int cantidad) {
        this.cantidad = cantidad;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }
}
