package com.servizo.servizo.DTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MenuRes {
    private Long menuId;
    private String name;
    private String description;
    private String imgUrl;
    private Integer price;
    private boolean isAvailable;
}
