package com.smart.back;

import org.springframework.data.repository.Repository;
import java.util.List;

public interface DetalleRepository extends Repository<Detalle,Integer> {
    List<Detalle> findAll();
    Detalle findById(int id);
    Detalle save(Detalle p);
}
