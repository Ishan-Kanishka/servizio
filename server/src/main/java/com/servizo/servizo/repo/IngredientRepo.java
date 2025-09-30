package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.Ingredients;

public interface IngredientRepo extends JpaRepository<Ingredients, Long> {

}