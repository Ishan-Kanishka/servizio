package com.servizo.servizo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/order/")
public class OrderController {

    @GetMapping({ "/", "/getOrders" })
    public String getOrders() {
        return "Hello, World!";
    }

}
