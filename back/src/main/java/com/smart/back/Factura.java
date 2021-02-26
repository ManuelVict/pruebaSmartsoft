package com.smart.back;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="facturas")
public class Factura {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="num_facturas")
    private int num_facturas;
    @Column(name="id_cliente")
    private int id_cliente;
    @Column(name="fecha")
    private Date fecha;

    public int getNum_factura() {
        return num_facturas;
    }

    public void setNum_factura(int num_factura) {
        this.num_facturas = num_factura;
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
