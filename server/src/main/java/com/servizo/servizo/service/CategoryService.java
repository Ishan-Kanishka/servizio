package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Category;
import com.servizo.servizo.repo.CategoryRepo;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    public List<Category> getAllCategories() {
        return categoryRepo.findAll();
    }

    public Category createCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Category getCategoryById(Long id) {
        return categoryRepo.findById(id).orElse(null);
    }

    public Category saveCategory(Category category) {
        return categoryRepo.save(category);
    }

    public Category updateCategory(Long id, Category categoryDetails) {
        Category category = categoryRepo.findById(id).orElse(null);
        if (category == null)
            return null;

        category.setCatName(categoryDetails.getCatName());
        return categoryRepo.save(category);
    }

    public boolean deleteCategory(Long id) {
        if (!categoryRepo.existsById(id))
            return false;

        categoryRepo.deleteById(id);
        return true;
    }
}
