package com.servizo.servizo.utils.SortOrder;

import java.util.Comparator;
import java.util.List;

import org.springframework.stereotype.Component;

import com.servizo.servizo.model.Order;

@Component("price")
public class OrderByPrice implements OrderSortStrategy {
    @Override
    public List<Order> sort(List<Order> orders) {
        orders.sort(Comparator.comparingInt(Order::getPrice));
        return orders;
    }
}
