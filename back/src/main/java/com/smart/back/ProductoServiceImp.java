package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class ProductoServiceImp implements ProductoService{
    @Autowired
    private ProductoRepository repositorio;
    @Override
    public List<Producto> listar() {
        return repositorio.findAll();
    }

    @Override
    public Producto listarId(int id) {
        return null;
    }

    @Override
    public Producto add(Producto p) {
        return repositorio.save(p);
    }
}
