package com.servizo.servizo.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;

    private String name;
    private String description;
    private String imgUrl;
    private Integer price;
    private boolean isAvailable;

    @ManyToOne
    @JoinColumn(name = "cat_id")
    @JsonBackReference(value = "category-menus")
    private Category category;

    @OneToMany(mappedBy = "menu")
    @JsonManagedReference(value = "menu-ingredients")
    List<MenuIngredients> menuIngredients;

}
