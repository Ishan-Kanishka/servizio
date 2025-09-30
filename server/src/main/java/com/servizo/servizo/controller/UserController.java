package com.servizo.servizo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.User;
import com.servizo.servizo.service.UserService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public ResponseEntity<GeneralResDTO> getAll() {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), userService.getAll());
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<GeneralResDTO> create(@RequestBody User user) {
        GeneralResDTO res = new GeneralResDTO();
        res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), userService.save(user));
        return new ResponseEntity<>(res, HttpStatus.CREATED);
    }
}


