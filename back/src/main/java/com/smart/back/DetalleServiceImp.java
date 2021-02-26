package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DetalleServiceImp implements DetalleService{

    @Autowired
    private DetalleRepository repositorio;
    @Override
    public List<Detalle> listar() {
        return repositorio.findAll();
    }

    @Override
    public Detalle listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Detalle add(Detalle d) {
        return repositorio.save(d);
    }
}
