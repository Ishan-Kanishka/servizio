package com.servizo.servizo.DTO;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EventRequestDTO {
    private Long eventId;
    private Long userId;
    private String description;
    private Date eventDate;
    private Integer numOfPeople;
    private Date updatedAt;
}
