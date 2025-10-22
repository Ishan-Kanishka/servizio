package com.servizo.servizo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.servizo.servizo.DTO.GeneralResDTO;
import com.servizo.servizo.model.Employee;
import com.servizo.servizo.service.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping({ "/", "/all" })
    public ResponseEntity<GeneralResDTO> getAll() {
        GeneralResDTO res = new GeneralResDTO();
        try {
            List<Employee> employees = employeeService.getAll();
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), employees);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/get_employee")
    public ResponseEntity<GeneralResDTO> getById(@RequestParam Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Employee employee = employeeService.getById(id);
            res.setResponse(HttpStatus.OK.value(), HttpStatus.OK.getReasonPhrase(), employee);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/save_employee")
    public ResponseEntity<GeneralResDTO> create(@RequestBody Employee employee) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Employee savedEmployee = employeeService.save(employee);
            res.setResponse(HttpStatus.CREATED.value(), "Employee created successfully", savedEmployee);
            return new ResponseEntity<>(res, HttpStatus.CREATED);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update_employee")
    public ResponseEntity<GeneralResDTO> update(@RequestBody Employee employee) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            Employee updatedEmployee = employeeService.update(employee);
            res.setResponse(HttpStatus.OK.value(), "Employee updated successfully", updatedEmployee);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/delete_employee")
    public ResponseEntity<GeneralResDTO> delete(@RequestParam Long id) {
        GeneralResDTO res = new GeneralResDTO();
        try {
            employeeService.delete(id);
            res.setResponse(HttpStatus.OK.value(), "Employee deleted successfully", null);
            return new ResponseEntity<>(res, HttpStatus.OK);
        } catch (Exception e) {
            res.setResponse(HttpStatus.INTERNAL_SERVER_ERROR.value(), e.getMessage(), null);
            return new ResponseEntity<>(res, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
