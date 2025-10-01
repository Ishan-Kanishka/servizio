package com.servizo.servizo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
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
        try {
            Table created = tableService.save(table);
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), created);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.BAD_REQUEST.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/{tableId}/reserve")
    public ResponseEntity<GeneralResDTO> reserve(@PathVariable Integer tableId) {
        GeneralResDTO res = new GeneralResDTO();
        Table updated = tableService.reserve(tableId);
        if (updated == null) {
            res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
        }
        res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), updated);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping("/{tableId}/release")
    public ResponseEntity<GeneralResDTO> release(@PathVariable Integer tableId) {
        GeneralResDTO res = new GeneralResDTO();
        Table updated = tableService.release(tableId);
        if (updated == null) {
            res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
        }
        res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), updated);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }
}
