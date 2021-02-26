package com.smart.back;

import org.springframework.data.repository.Repository;
import java.util.List;

public interface ClienteRepository extends Repository<Cliente,Integer> {
    List<Cliente> findAll();
    Cliente findById(int id);
    Cliente save(Cliente c);
}
