package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.servizo.servizo.model.Employee;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Long> {

}


