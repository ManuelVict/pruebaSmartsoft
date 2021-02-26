package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ClienteServiceImp implements ClienteService{
    @Autowired
    private ClienteRepository repositorio;

    @Override
    public List<Cliente> listar() {
         return repositorio.findAll();
    }

    @Override
    public Cliente listarId(int id) {
        return repositorio.findById(id);
    }

    @Override
    public Cliente add(Cliente c) {
        return repositorio.save(c);
    }
}
