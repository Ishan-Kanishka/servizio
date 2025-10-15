package com.servizo.servizo.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Order;
import com.servizo.servizo.utils.SortOrder.OrderSortStrategy;

@Service
public class OrderSorter {
    private final Map<String, OrderSortStrategy> strategies;

    public OrderSorter(Map<String, OrderSortStrategy> strategies) {
        this.strategies = strategies;
    }

    public List<Order> getSortedOrders(List<Order> orders, String sortBy) {
        OrderSortStrategy strategy = strategies.getOrDefault(sortBy, strategies.get("id"));
        return strategy.sort(orders);
    }
}
