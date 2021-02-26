package com.smart.back;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="factura")
public class Factura {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="num_factura")
    private int num_factura;
    @Column(name="id_cliente")
    private int id_cliente;
    @Column(name="fecha")
    private Date fecha;

    public int getNum_factura() {
        return num_factura;
    }

    public void setNum_factura(int num_factura) {
        this.num_factura = num_factura;
    }

    public int getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(int id_cliente) {
        this.id_cliente = id_cliente;
    }

    public Date getFecha() {
        return fecha;
    }

    public void setFecha(Date fecha) {
        this.fecha = fecha;
    }
}
