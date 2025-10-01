package com.servizo.servizo.DTO;

import java.sql.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponseDTO {
    private Long customer_id;
    private String note;
    private Date orderDate;
    private Integer totalPrice;
    private boolean status;
    private List<OrderItemDTO> orderItems;
}
