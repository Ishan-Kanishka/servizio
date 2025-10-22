package com.servizo.servizo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.servizo.servizo.model.OrderItem;
import com.servizo.servizo.model.OrderItemID;

public interface OrderItemRepo extends JpaRepository<OrderItem, OrderItemID> {
    @Query("SELECT oi FROM OrderItem oi WHERE oi.id.orderId = ?1")
    List<OrderItem> findByOrderItemByOrderId(Long orderId);

    @Transactional
    @Modifying
    @Query("DELETE FROM OrderItem oi WHERE oi.order.id = :orderId")
    void deleteByOrderId(@Param("orderId") Long orderId);
}
