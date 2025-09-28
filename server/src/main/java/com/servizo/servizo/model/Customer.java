package com.servizo.servizo.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Customer extends User {
    private String address;
    @Column
    private String zipCode;
    private String city;
    private String country;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "customer")
    private List<Event> events;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "customer")
    private List<Order> orders;
}
