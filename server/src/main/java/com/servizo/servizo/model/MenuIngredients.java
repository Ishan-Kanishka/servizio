package com.servizo.servizo.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.MapsId;
import lombok.Data;

@Entity
@Data
public class MenuIngredients {

    @EmbeddedId
    private MenuIngredientID id;

    @ManyToOne
    @MapsId("menuId")
    @JoinColumn(name = "menu_id")
    @JsonBackReference
    private Menu menu;

    @ManyToOne
    @MapsId("ingId")
    @JoinColumn(name = "ing_id")
    @JsonBackReference
    private Ingredients ingredients;

    private Integer quantity;
    private String unit;
}
