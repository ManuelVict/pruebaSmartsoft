package com.smart.back;
import javax.persistence.*;
@Entity
@Table(name="producto")
public class Producto {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_producto")
    private int id_producto;
    @Column(name="nombre")
    private String nombre;
    @Column(name="precio")
    private float precio;
    @Column(name="stock")
    private int stock;

    public int getId_producto() {
        return id_producto;
    }

    public void setId_producto(int id_producto) {
        this.id_producto = id_producto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public float getPrecio() {
        return precio;
    }

    public void setPrecio(float precio) {
        this.precio = precio;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
