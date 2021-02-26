package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/facturas"})
public class ControladorFacturas {

    @Autowired
    FacturaService service;
    @GetMapping
    public List<Factura> listar(){
        return service.listar();
    };
    @PostMapping
    public Factura add(@RequestBody Factura f){
        return service.add(f);
    }
    @GetMapping(path={"/{id}"})
    public Factura listarId(@PathVariable("id") int id){return service.listarId(id);}
}
