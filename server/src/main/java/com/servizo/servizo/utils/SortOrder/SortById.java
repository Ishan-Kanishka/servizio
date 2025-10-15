package com.servizo.servizo.utils.SortOrder;

import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Component;

import com.servizo.servizo.model.Order;

@Component("id")
public class SortById implements OrderSortStrategy {
    @Override
    public List<Order> sort(List<Order> orders) {
        orders.sort(Comparator.comparingLong(Order::getOrderId));
        return orders;
    }
}
