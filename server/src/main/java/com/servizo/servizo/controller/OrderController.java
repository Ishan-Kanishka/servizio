package com.servizo.servizo.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.DTO.OrderDTO;
import com.servizo.servizo.DTO.OrderResponseDTO;
import com.servizo.servizo.model.Order;
import com.servizo.servizo.service.OrderService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/order/")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @GetMapping({ "/", "/getOrders" })
    public ResponseEntity<GeneralResDTO> getOrders() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Order> orders = orderService.getOrders();
            if (orders != null && !orders.isEmpty()) {
                res.setResponse(HttpStatus.ACCEPTED.value(), HttpStatus.ACCEPTED.getReasonPhrase(),
                        orders);
                return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
            } else {
                res.setResponse(HttpStatus.NO_CONTENT.value(), HttpStatus.NO_CONTENT.getReasonPhrase(),
                        null);
                return new ResponseEntity<>(res, HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_order")
    public ResponseEntity<GeneralResDTO> saveOrder(@RequestBody OrderDTO order) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            System.out.println(order);
            OrderResponseDTO saved_order = orderService.saveOrder(order);
            if (saved_order != null) {
                res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), saved_order);
                return new ResponseEntity<>(res, HttpStatus.CREATED);
            } else {
                res.setResponse(HttpStatus.BAD_REQUEST.value(), HttpStatus.BAD_REQUEST.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.BAD_REQUEST);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
