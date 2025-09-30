package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Menu;
import com.servizo.servizo.repo.MenuRepo;

@Service
public class MenuService {
    @Autowired
    private MenuRepo menuRepo;

    public List<Menu> getAllMenus() {
        return menuRepo.findAll();
    }

    public Menu getMenuById(Long id) {
        return menuRepo.findById(id).orElse(null);
    }

    public Menu saveMenu(Menu menu) {
        return menuRepo.save(menu);
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
            List<Menu> menus = List.of(
                    new Menu(null, "Burger", "Delicious beef burger", "https://example.com/1.png", 1200, true, null),
                    new Menu(null, "Pizza", "Cheesy pepperoni pizza", "https://example.com/2.png", 1500, true, null),

                    new Menu(null, "Pasta", "Creamy Alfredo pasta", "https://example.com/3.png", 1300, true, null),
                    new Menu(null, "Salad", "Fresh garden salad", "https://example.com/4.png", 800, true, null),
                    new Menu(null, "Sushi", "Assorted sushi platter", "https://example.com/5.png", 2000, true, null),
                    new Menu(null, "Steak", "Grilled ribeye steak", "https://example.com/6.png", 2500, true, null),
                    new Menu(null, "Tacos", "Spicy chicken tacos", "https://example.com/7.png", 1100, true, null));
            menuRepo.saveAll(menus);
        }
    }
}
