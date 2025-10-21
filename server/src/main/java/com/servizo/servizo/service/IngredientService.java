package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Ingredients;
import com.servizo.servizo.repo.IngredientRepo;

@Service
public class IngredientService {
    @Autowired
    private IngredientRepo ingredientRepo;

    public List<Ingredients> getAllIngredients() {
        return ingredientRepo.findAll();
    }

    public Ingredients getIngredientById(Long id) {
        return ingredientRepo.findById(id).orElse(null);
    }

    public Ingredients addIngredient(Ingredients ingredient) {
        return ingredientRepo.save(ingredient);
    }

    public Ingredients updateIngredient(Long id, Ingredients updatedIngredient) {
        Ingredients existingIngredient = ingredientRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("Ingredient not found"));
        existingIngredient.setName(updatedIngredient.getName());

        return ingredientRepo.save(existingIngredient);
    }

    public boolean deleteIngredient(Long id) {
        if (!ingredientRepo.existsById(id))
            return false;
        ingredientRepo.deleteById(id);
        return true;
    }
}
