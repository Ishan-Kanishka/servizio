package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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

    @GetMapping({ "/", "/all" })
    public ResponseEntity<GeneralResDTO> getAll() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Promotion> promotions = promotionService.getAll();
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), promotions);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get_promotion")
    public ResponseEntity<GeneralResDTO> getById(@RequestParam Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Promotion promotion = promotionService.getById(id);
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), promotion);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_promotion")
    public ResponseEntity<GeneralResDTO> create(@RequestBody Promotion promotion) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Promotion createdPromotion = promotionService.save(promotion);
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), createdPromotion);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update_promotion")
    public ResponseEntity<GeneralResDTO> update(@RequestBody Promotion promotion) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Promotion updatedPromotion = promotionService.update(promotion);
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), updatedPromotion);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete_promotion")
    public ResponseEntity<GeneralResDTO> delete(@RequestParam Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            promotionService.delete(id);
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
