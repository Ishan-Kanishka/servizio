package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Role;
import com.servizo.servizo.service.RoleService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/role")
public class RoleController {
    @Autowired
    private RoleService roleService;

    @GetMapping({ "/", "/get_roles" })
    public ResponseEntity<GeneralResDTO> getRoles() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Role> roles = roleService.getRoles();

            if (roles == null || roles.isEmpty()) {
                res.setResponse(HttpStatus.NO_CONTENT.value(), HttpStatus.NO_CONTENT.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NO_CONTENT);
            }
            res.setResponse(HttpStatus.ACCEPTED.value(), HttpStatus.ACCEPTED.getReasonPhrase(), roles);
            return new ResponseEntity<>(res, HttpStatus.ACCEPTED);

        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_role")
    public ResponseEntity<GeneralResDTO> saveRole(@RequestParam String role_name) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Role role = new Role();
            role.setRoleName(role_name);

            Role savedRole = roleService.saveRole(role);
            if (savedRole != null) {
                res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), savedRole);
                return new ResponseEntity<>(res, HttpStatus.CREATED);
            } else {
                res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                        HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
