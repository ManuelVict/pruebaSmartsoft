package com.smart.back;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ClienteService {
    List<Cliente> listar();
    Cliente listarId(int id);
    Cliente add(Cliente c);
}
