package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.OrderItem;
import com.servizo.servizo.model.OrderItemID;
import com.servizo.servizo.repo.OrderItemRepo;
import com.servizo.servizo.repo.OrderRepo;

@Service
public class OrderItemService {

    @Autowired
    private OrderItemRepo orderItemRepo;
    @Autowired
    private OrderRepo orderRepo;
    @Autowired
    private MenuService menuService;

    public List<OrderItem> getItemsByOrderId(Long orderId) {
        List<OrderItem> orderItems = orderItemRepo.findByOrderItemByOrderId(orderId);
        return orderItems;
    }

    public OrderItem saveOrderItem(OrderItem orderItem) {
        return orderItemRepo.save(orderItem);
    }

    public void deleteOrderItem(OrderItemID orderItemId) {
        orderItemRepo.deleteById(orderItemId);
    }

    public void deleteItemsByOrderId(Long orderId) {
        orderItemRepo.deleteByOrderId(orderId);
    }

    public boolean deleteItem(OrderItemID orderItemID) {
        if (orderItemRepo.existsById(orderItemID)) {
            orderItemRepo.deleteById(orderItemID);
            return true;
        }
        return false;
    }
}