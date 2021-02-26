package com.smart.back;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DetalleService {
    List<Detalle> listar();
    Detalle listarId(int id);
    Detalle add(Detalle d);
}
