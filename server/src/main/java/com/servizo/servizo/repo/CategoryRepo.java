package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.Category;

public interface CategoryRepo extends JpaRepository<Category, Long> {

}
