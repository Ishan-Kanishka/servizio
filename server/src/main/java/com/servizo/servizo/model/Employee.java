package com.servizo.servizo.model;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Employee extends User {
    @Column(name = "hired_date")
    private String hiredDate;
    private Long salary;
}
