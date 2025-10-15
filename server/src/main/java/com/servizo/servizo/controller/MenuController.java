package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.DTO.MenuRequest;
import com.servizo.servizo.DTO.MenuResponseDTO;
import com.servizo.servizo.model.Menu;
import com.servizo.servizo.service.MenuService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/menus/")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @GetMapping({ "/", "/get_menus" })
    public ResponseEntity<GeneralResDTO> getMenus() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            // List<MenuResponseDTO> menus = menuService.getAllMenus();
            List<Menu> menus = menuService.getAllMenus();
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(),
                    menus);
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<GeneralResDTO> getMenuById(@PathVariable Long id) {
        try {
            Menu menu = menuService.getMenuById(id);
            if (menu != null) {
                GeneralResDTO res = new GeneralResDTO();
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), menu);
                return new ResponseEntity<>(res, HttpStatus.OK);
            } else {
                GeneralResDTO res = new GeneralResDTO();
                res.setResponse(HttpStatus.NOT_FOUND.value(), HttpStatus.NOT_FOUND.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            GeneralResDTO res = new GeneralResDTO();
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), e);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_menu")
    public ResponseEntity<GeneralResDTO> saveMenu(@RequestBody MenuRequest menu) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            MenuResponseDTO created_menu = menuService.saveMenu(menu);
            res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), created_menu);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
