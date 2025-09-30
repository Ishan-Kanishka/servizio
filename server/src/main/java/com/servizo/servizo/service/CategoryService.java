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

    public List<Category> getAll() {
        return categoryRepo.findAll();
    }

    public Category save(Category category) {
        return categoryRepo.save(category);
    }
}
