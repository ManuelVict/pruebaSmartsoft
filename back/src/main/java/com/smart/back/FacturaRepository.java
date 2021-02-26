package com.smart.back;

import org.springframework.data.repository.Repository;

import java.util.List;

public interface FacturaRepository extends Repository<Factura,Integer> {
    List<Factura> findAll();
    Factura findById(int id);
    Factura save(Factura f);
}
