package com.servizo.servizo.model;

import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Table {
    private int id;
    private int capacity;
    private boolean isAvailable;
}