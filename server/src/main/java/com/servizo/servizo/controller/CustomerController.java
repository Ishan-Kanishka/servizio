package com.servizo.servizo.controller;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Customer;
import com.servizo.servizo.service.CustomerService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/customer/")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping({ "/", "/get_customers" })
    public ResponseEntity<GeneralResDTO> getCustomers() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Customer> customers = customerService.getCustomers();
            if (customers != null && !customers.isEmpty()) {
                res.setResponse(HttpStatus.ACCEPTED.value(), HttpStatus.ACCEPTED.getReasonPhrase(), customers);
                return new ResponseEntity<>(res, HttpStatus.ACCEPTED);
            } else {
                res.setResponse(HttpStatus.NO_CONTENT.value(), HttpStatus.NO_CONTENT.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.NO_CONTENT);
            }
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(),
                    HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_customer")
    public ResponseEntity<GeneralResDTO> saveCustomer(@RequestParam Customer customer) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Customer savedCustomer = customerService.saveCustomer(customer);
            if (savedCustomer != null) {
                res.setResponse(HttpStatus.CREATED.value(), HttpStatus.CREATED.getReasonPhrase(), savedCustomer);
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
