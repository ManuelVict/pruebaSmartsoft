package com.smart.back;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface ProductoService {

    List<Producto> listar();
    Producto listarId(int id);
    Producto add(Producto p);
    Producto edit(Producto p);


}
