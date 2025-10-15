package com.servizo.servizo.utils.SortOrder;

import java.util.List;

import org.springframework.stereotype.Component;

import com.servizo.servizo.model.Order;

@Component("date")
public class SortByDate implements OrderSortStrategy {
    @Override
    public List<Order> sort(List<Order> orders) {
        orders.sort(
                (prev, curr) -> curr.getOrderDate().compareTo(prev.getOrderDate()));
        return orders;
    }

}