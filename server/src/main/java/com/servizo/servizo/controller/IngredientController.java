package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Ingredients;
import com.servizo.servizo.service.IngredientService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

    @GetMapping("/get_ingredient/{id}")
    public ResponseEntity<GeneralResDTO> getIngredientById(@PathVariable Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Ingredients ingredient = ingredientService.getIngredientById(id);
            if (ingredient != null) {
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), ingredient);
                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(),
                        "Ingredient not found");
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
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
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), saved_ingredient);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update_ingredient/")
    public ResponseEntity<GeneralResDTO> updateIngredient(@RequestBody Ingredients ingredient) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Ingredients updated_ingredient = ingredientService.updateIngredient(ingredient.getIngId(), ingredient);
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), updated_ingredient);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete_ingredient/{id}")
    public ResponseEntity<GeneralResDTO> deleteIngredient(@PathVariable Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            boolean isDeleted = ingredientService.deleteIngredient(id);
            if (isDeleted) {
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(),
                        "Ingredient deleted successfully");
                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(),
                        "Ingredient not found");
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
