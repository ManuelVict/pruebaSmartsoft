package com.smart.back;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200", maxAge=3600)
@RestController
@RequestMapping({"/cliente"})
public class ContoladorCliente {
    @Autowired
    ClienteService service;
    @GetMapping
    public List<Cliente> listar(){
        return service.listar();
    };
    @PostMapping
    public Cliente agregar(@RequestBody Cliente c){
        return service.add(c);
    }
    @GetMapping(path={"/{id}"})
    public Cliente listarId(@PathVariable("id") int id){return service.listarId(id);}
}
