package com.servizo.servizo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Table;
import com.servizo.servizo.service.TableService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/tables")
public class TableController {

    @Autowired
    private TableService tableService;

    @GetMapping
    public ResponseEntity<GeneralResDTO> getAll() {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), tableService.getAll());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<GeneralResDTO> create(@RequestBody Table table) {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), tableService.save(table));
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}


