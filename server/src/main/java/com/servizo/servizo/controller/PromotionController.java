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
import com.servizo.servizo.model.Promotion;
import com.servizo.servizo.service.PromotionService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/promotions")
public class PromotionController {

    @Autowired
    private PromotionService promotionService;

    @GetMapping
    public ResponseEntity<GeneralResDTO> getAll() {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), promotionService.getAll());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<GeneralResDTO> create(@RequestBody Promotion promotion) {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), promotionService.save(promotion));
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}


