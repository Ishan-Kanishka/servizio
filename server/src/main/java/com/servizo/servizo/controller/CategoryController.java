package com.servizo.servizo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Category;
import com.servizo.servizo.model.Menu;
import com.servizo.servizo.service.CategoryService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/category")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @GetMapping({ "/", "/get_categories" })
    public ResponseEntity<GeneralResDTO> getCategories() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Category> categories = categoryService.getAllCategories();
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), categories);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get_category_by_id")
    public ResponseEntity<GeneralResDTO> getCategoryById(@RequestParam Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Category category = categoryService.getCategoryById(id);
            if (category != null) {
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), category);
                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                res.setResponse(HttpStatus.NOT_FOUND.value(), "Category not found", null);
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/add_category")
    public ResponseEntity<GeneralResDTO> addCategory(@RequestParam String name) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Category newCategory = categoryService.saveCategory(new Category(null, name, new ArrayList<Menu>()));
            res.setResponse(HttpStatus.CREATED.value(), "Category created successfully", newCategory);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
