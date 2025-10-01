package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Ingredients;
import com.servizo.servizo.service.IngredientService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/ingredients")
public class IngredientController {
    @Autowired
    private IngredientService ingredientService;

    @GetMapping({ "/", "/get_ingredients" })
    public ResponseEntity<GeneralResDTO> getIngredients() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Ingredients> ingredients = ingredientService.getAllIngredients();
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), ingredients);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_ingredient")
    public ResponseEntity<GeneralResDTO> addIngredient(@RequestBody Ingredients ingredient) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Ingredients saved_ingredient = ingredientService.addIngredient(ingredient);
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), ingredient);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
