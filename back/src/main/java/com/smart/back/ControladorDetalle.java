package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/detalle"})
public class ControladorDetalle {
    @Autowired
    DetalleService service;
    @GetMapping
    public List<Detalle> listar(){
        return service.listar();
    };
    @PostMapping
    public Detalle agregar(@RequestBody Detalle d){
        return service.add(d);
    }
    @GetMapping(path={"/{id}"})
    public Detalle listarId(@PathVariable("id") int id){return service.listarId(id);}
}
