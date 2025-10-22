package com.servizo.servizo.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.DTO.OrderDTO;
import com.servizo.servizo.DTO.OrderItemDTO;
import com.servizo.servizo.DTO.OrderResponseDTO;
import com.servizo.servizo.model.Customer;
import com.servizo.servizo.model.Menu;
import com.servizo.servizo.model.Order;
import com.servizo.servizo.model.OrderItem;
import com.servizo.servizo.model.OrderItemID;
import com.servizo.servizo.repo.CustomerRepo;
import com.servizo.servizo.repo.MenuRepo;
import com.servizo.servizo.repo.OrderItemRepo;
import com.servizo.servizo.repo.OrderRepo;
import com.servizo.servizo.utils.exceptions.CustomerNotFound;

@Service
public class OrderService {
    @Autowired
    private OrderRepo orderRepo;

    @Autowired
    private OrderItemRepo orderItemRepo;

    @Autowired
    private CustomerRepo customerRepo;
    @Autowired
    private MenuRepo menuRepo;

    @Autowired
    private OrderSorter orderSorter;

    /**
     * Get all orders
     * 
     * @return List of orders
     */
    public List<Order> getOrders() {
        List<Order> orders = orderRepo.findAll();
        return orders;
    }

    /**
     * Save an order
     * 
     * @param orderRequest
     * @return {Order} Saved order or null if error occurs
     */
    public OrderResponseDTO saveOrder(OrderDTO orderRequest) {
        try {
            // 1. Customer exists
            Customer customer = customerRepo.findById(orderRequest.getCustomer_id())
                    .orElseThrow(() -> new CustomerNotFound());

            // 2. Create order
            Order newOrder = new Order();
            newOrder.setCustomer(customer);
            newOrder.setOrderDate(new Date(System.currentTimeMillis()));
            newOrder.setStatus(true);
            newOrder.setNote(orderRequest.getNote());

            // 3. Save order
            Order savedOrder = orderRepo.save(newOrder);

            // 4. Save order items
            int totalPrice = 0;

            for (OrderItemDTO orderItem : orderRequest.getOrderItems()) {
                Menu menu = menuRepo.findById(orderItem.getMenu_id())
                        .orElseThrow(() -> new Exception("Menu not found"));

                OrderItem newOrderItem = new OrderItem();
                OrderItemID orderItemID = new OrderItemID(savedOrder.getOrderId(), menu.getMenuId());

                newOrderItem.setOrderItemId(orderItemID);
                newOrderItem.setOrder(savedOrder);
                newOrderItem.setMenu(menu);
                newOrderItem.setQuantity(orderItem.getQuantity());
                newOrderItem.setPrice(menu.getPrice() * orderItem.getQuantity());

                totalPrice += newOrderItem.getPrice();

                orderItemRepo.save(newOrderItem);
            }

            // 5. Update total price
            savedOrder.setPrice(totalPrice);
            Order order = orderRepo.save(savedOrder);

            OrderResponseDTO orderRes = new OrderResponseDTO();
            orderRes.setCustomer_id(order.getCustomer().getId());
            orderRes.setOrderDate(order.getOrderDate());
            orderRes.setNote(order.getNote());
            orderRes.setOrderItems(orderRequest.getOrderItems());
            orderRes.setStatus(order.isStatus());
            orderRes.setTotalPrice(order.getPrice());

            return orderRes;
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return null;
        }

    }

    public List<Order> getSortedOrders(String sortBy) {
        List<Order> orders = orderRepo.findAll();
        return orderSorter.getSortedOrders(orders, sortBy);
    }

    public boolean deleteOrderById(Long id) {
        try {
            if (orderRepo.existsById(id)) {
                // 1. Delete Order Items
                orderItemRepo.deleteByOrderId(id);
                // 2. Delete Order
                orderRepo.deleteById(id);
                return true;
            } else {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }
}
