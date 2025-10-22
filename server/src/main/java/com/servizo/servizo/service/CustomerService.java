package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Customer;
import com.servizo.servizo.model.Role;
import com.servizo.servizo.repo.CustomerRepo;
import com.servizo.servizo.repo.RoleRepo;
import com.servizo.servizo.utils.Roles;

@Service
public class CustomerService {
    @Autowired
    private CustomerRepo customerRepo;

    @Autowired
    private RoleRepo roleRepo;

    /**
     * Get all customers
     * 
     * @return List of customers
     */
    public List<Customer> getCustomers() {
        return customerRepo.findAll();
    }

    /**
     * Save a customer
     * 
     * @param customer
     * @return Customer
     */
    public Customer saveCustomer(Customer customer) {
        Role role = roleRepo.findByRoleName(Roles.CUSTOMER.getRole_name()).orElse(null);
        if (role == null)
            customer.setRole(null);

        customer.setRole(role);
        return customerRepo.save(customer);
    }

    /**
     * Get customer by id
     * 
     * @param customerId
     * @return Customer
     */
    public Customer getCustomerById(Long customerId) {
        return customerRepo.findById(customerId).orElse(null);
    }

    /**
     * Update customer
     * 
     * @param customer
     * @return Customer
     */
    public Customer updateCustomer(Customer customer) {
        return customerRepo.save(customer);
    }

    /**
     * Delete customer by id
     * 
     * @param customerId
     */
    public boolean deleteCustomer(Long customerId) {
        try {
            customerRepo.deleteById(customerId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }
}
