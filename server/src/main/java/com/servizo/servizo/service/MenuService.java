package com.servizo.servizo.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.DTO.MenuRequest;
import com.servizo.servizo.DTO.MenuResponseDTO;
import com.servizo.servizo.model.Category;
import com.servizo.servizo.model.Menu;
import com.servizo.servizo.repo.CategoryRepo;
import com.servizo.servizo.repo.MenuRepo;

@Service
public class MenuService {
    @Autowired
    private MenuRepo menuRepo;
    @Autowired
    private CategoryService categoryService;
    @Autowired
    private CategoryRepo categoryRepo;

    // public List<MenuResponseDTO> getAllMenus() {
    // // return menuRepo.findAll();
    // List<Menu> menus = menuRepo.findAll();
    // List<MenuResponseDTO> menuList = new ArrayList<>();
    // for (Menu menu : menus) {
    // MenuResponseDTO _menu = new MenuResponseDTO(menu.getMenuId(), menu.getName(),
    // menu.getDescription(),
    // menu.getImgUrl(), menu.getPrice(), menu.isAvailable(),
    // menu.getCategory().getCatName());
    // menuList.add(_menu);
    // }
    // return menuList;
    // }
    public List<Menu> getAllMenus() {
        return menuRepo.findAll();
    }

    public Menu getMenuById(Long id) {
        return menuRepo.findById(id).orElse(null);
    }

    public MenuResponseDTO saveMenu(MenuRequest menuRequest) {
        try {
            Category category = categoryRepo.findById(menuRequest.getCatId()).orElseThrow(
                    () -> new Exception("Category not found"));
            Menu menu = new Menu();
            menu.setName(menuRequest.getName());
            menu.setDescription(menuRequest.getDescription());
            menu.setPrice(menuRequest.getPrice());
            menu.setImgUrl(menuRequest.getImgUrl());
            menu.setAvailable(menuRequest.isAvailable());
            menu.setCategory(category);

            Menu savedMenu = menuRepo.save(menu);

            MenuResponseDTO resDto = new MenuResponseDTO(
                    savedMenu.getMenuId(),
                    savedMenu.getName(),
                    savedMenu.getDescription(),
                    savedMenu.getImgUrl(),
                    savedMenu.getPrice(),
                    savedMenu.isAvailable(),
                    category.getCatName());
            return resDto;
        } catch (Exception e) {
            return null;
        }
    }

    public Menu updateMenu(Long id, Menu menuDetails) {
        Menu menu = menuRepo.findById(id).orElse(null);
        if (menu != null) {
            menu.setName(menuDetails.getName());
            menu.setDescription(menuDetails.getDescription());
            menu.setPrice(menuDetails.getPrice());
            return menuRepo.save(menu);
        }
        return null;
    }

    public Menu deleteMenu(Long id) {
        Menu menu = menuRepo.findById(id).orElse(null);
        if (menu != null) {
            menuRepo.delete(menu);
            return menu;
        }
        return null;
    }

    public void init_table() {
        if (menuRepo.count() == 0) {
            Category category;
            if (categoryRepo.count() == 0) {
                category = categoryService.saveCategory(new Category(null, "Lunch", null));
            } else {
                category = categoryRepo.findAll().get(0);
            }

            List<Menu> menus = List.of(
                    new Menu(null, "Burger", "Delicious beef burger", "https://example.com/1.png", 1200, true, null,
                            null),
                    new Menu(null, "Pizza", "Cheesy pepperoni pizza", "https://example.com/2.png", 1500, true, null,
                            null),
                    new Menu(null, "Pasta", "Creamy Alfredo pasta", "https://example.com/3.png", 1300, true, null,
                            null),
                    new Menu(null, "Salad", "Fresh garden salad", "https://example.com/4.png", 800, true, null, null),
                    new Menu(null, "Sushi", "Assorted sushi platter", "https://example.com/5.png", 2000, true, null,
                            null),
                    new Menu(null, "Steak", "Grilled ribeye steak", "https://example.com/6.png", 2500, true, null,
                            null),
                    new Menu(null, "Tacos", "Spicy chicken tacos", "https://example.com/7.png", 1100, true, null,
                            null));
            menus.forEach(menu -> menu.setCategory(category));
            menuRepo.saveAll(menus);
        }
    }
}
