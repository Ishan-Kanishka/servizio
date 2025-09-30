package com.servizo.servizo.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuRequest {
    private String name;
    private String description;
    private String imgUrl;
    private Integer price;
    private boolean isAvailable;
    private Long catId;
    private List<Long> ingredientIds;
}
