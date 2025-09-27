package com.servizo.servizo.model;

import java.sql.Date;

import org.springframework.data.annotation.Id;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;

public class Event {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long eventId;
    private String description;
    private Date eventDate;
    private Integer numOfPeople;
    private Date updatedAt;

    @OneToMany(mappedBy = "event")
    @JoinColumn(name = "customer_id")
    private Customer customer_id;
    private boolean status;
}
