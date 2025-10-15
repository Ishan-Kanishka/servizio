package com.servizo.servizo.utils.SortOrder;

import java.util.List;

import com.servizo.servizo.model.Order;

public interface OrderSortStrategy {
    List<Order> sort(List<Order> orders);
}
