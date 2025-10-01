package com.servizo.servizo.DTO;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
    private Long customer_id;
    private String note;
    private List<OrderItemDTO> orderItems;
}