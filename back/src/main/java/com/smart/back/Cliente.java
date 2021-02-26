package com.smart.back;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="cliente")
public class Cliente {
    @Column(name="apellido")
    private String apellido;
    @Column(name="direccion")
    private String direccion;
    @Column(name="fecha_nacimiento")
    private Date fecha_nacimiento;
    @Id
    @Basic(optional = false)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_cliente")
    private Integer id_cliente;
    @Column(name="nombre")
    private String nombre;
    @Column(name="telefono")
    private int telefono;
    @Column(name="email")
    private String email;

    public String getApellido() {   
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public Date getFecha_nacimiento() {
        return fecha_nacimiento;
    }

    public void setFecha_nacimiento(Date fecha_nacimiento) {
        this.fecha_nacimiento = fecha_nacimiento;
    }

    public Integer getId_cliente() {
        return id_cliente;
    }

    public void setId_cliente(Integer id_cliente) {
        this.id_cliente = id_cliente;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}
