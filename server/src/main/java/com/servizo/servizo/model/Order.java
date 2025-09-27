package com.servizo.servizo.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name = "total_price")
    private Integer price;

    private String note;
    private Date orderDate;
    private boolean status;

    @OneToMany(mappedBy = "order")
    @JoinColumn(name = "customer_id")
    private Customer customer;
}
