package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Employee;
import com.servizo.servizo.model.Role;
import com.servizo.servizo.repo.EmployeeRepo;
import com.servizo.servizo.repo.RoleRepo;

@Service
public class EmployeeService {
    @Autowired
    private EmployeeRepo employeeRepo;

    @Autowired
    private RoleRepo roleRepo;

    public List<Employee> getAll() {
        return employeeRepo.findAll();
    }

    public Employee save(Employee employee) {
        Role role = roleRepo.findByRoleName("CASHIER").orElse(null);
        if (role == null)
            employee.setRole(null);
        employee.setRole(role);
        return employeeRepo.save(employee);
    }

    public Employee update(Employee employee) {
        return employeeRepo.save(employee);
    }

    public void delete(Long id) {
        employeeRepo.deleteById(id);
    }
}
