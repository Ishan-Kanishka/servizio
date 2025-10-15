package com.servizo.servizo.utils.SortOrder;

import java.util.List;

import org.springframework.stereotype.Component;

import com.servizo.servizo.model.Order;

@Component("id")
public class SortById implements OrderSortStrategy {
    @Override
    public List<Order> sort(List<Order> orders) {
        orders.sort(
                (prev, curr) -> Long.compare(curr.getOrderId(), prev.getOrderId()));
        return orders;
    }
}
