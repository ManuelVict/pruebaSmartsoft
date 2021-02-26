package com.smart.back;

import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface FacturaService {
    List<Factura> listar();
    Factura listarId(int id);
    Factura add(Factura f);
}
