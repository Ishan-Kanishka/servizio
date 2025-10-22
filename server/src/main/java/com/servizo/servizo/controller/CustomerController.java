package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Customer;
import com.servizo.servizo.service.CustomerService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/customer")
public class CustomerController {
    @Autowired
    private CustomerService customerService;

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

    @GetMapping("/get_customer/{customerId}")
    public ResponseEntity<GeneralResDTO> getCustomer(@PathVariable Long customerId) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Customer customer = customerService.getCustomerById(customerId);
            if (customer != null) {
                res.setResponse(HttpStatus.ACCEPTED.value(), HttpStatus.ACCEPTED.getReasonPhrase(), customer);
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
    public ResponseEntity<GeneralResDTO> saveCustomer(@RequestBody Customer customer) {
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

    @PutMapping("/update_customer")
    public ResponseEntity<GeneralResDTO> updateCustomer(@RequestBody Customer customer) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Customer updatedCustomer = customerService.updateCustomer(customer);
            if (updatedCustomer != null) {
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), updatedCustomer);
                return new ResponseEntity<>(res, HttpStatus.OK);
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

    @DeleteMapping("/delete_customer/{customerId}")
    public ResponseEntity<GeneralResDTO> deleteCustomer(@PathVariable Long customerId) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            boolean isDeleted = customerService.deleteCustomer(customerId);
            if (isDeleted) {
                res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), null);
                return new ResponseEntity<>(res, HttpStatus.OK);
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
