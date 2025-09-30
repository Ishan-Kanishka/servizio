package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

}
