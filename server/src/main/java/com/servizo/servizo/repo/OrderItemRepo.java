package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.OrderItem;
import com.servizo.servizo.model.OrderItemID;

public interface OrderItemRepo extends JpaRepository<OrderItem, OrderItemID> {

}
