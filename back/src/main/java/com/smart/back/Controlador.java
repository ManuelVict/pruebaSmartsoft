package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/productos"})

public class Controlador {
    @Autowired  
    ProductoService service;
    @GetMapping
    public List<Producto> listar(){
        return service.listar();
    };
    @PostMapping
    public Producto agregar(@RequestBody Producto p){
        return service.add(p);
    }
    @GetMapping(path={"/{id}"})
    public Producto listarId(@PathVariable("id") int id){

        return service.listarId(id);
    }
}
