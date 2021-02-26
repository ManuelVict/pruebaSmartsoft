package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
@Service

public class FacturaServiceImp implements FacturaService {
    @Autowired
    private FacturaRepository repositorio;

    @Override
    public List<Factura> listar() {
        return repositorio.findAll();
    }

    @Override
    public Factura listarId(int id) {
       return repositorio.findById(id);
    }



    @Override
    public Factura add(Factura f) {
        return repositorio.save(f);
    }
}
