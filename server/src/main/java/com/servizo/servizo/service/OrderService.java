package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Order;
import com.servizo.servizo.repo.OrderRepo;

@Service
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    /**
     * Get all orders
     * 
     * @return List of orders
     */
    public List<Order> getOrders() {
        return orderRepo.findAll();
    }

    public Order savOrder(Order order) {
        return orderRepo.save(order);
    }
}
