package com.servizo.servizo.utils.SortOrder;

import java.util.List;

import org.springframework.stereotype.Component;

import com.servizo.servizo.model.Order;

@Component("status")
public class SortByStatus implements OrderSortStrategy {
    @Override
    public List<Order> sort(List<Order> orders) {
        orders.sort(
                (prev, curr) -> Boolean.compare(prev.isStatus(), curr.isStatus()));
        return orders;
    }
}
