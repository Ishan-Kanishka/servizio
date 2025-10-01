package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.servizo.servizo.model.Customer;

@Repository
public interface CustomerRepo extends JpaRepository<Customer, Long> {

}
