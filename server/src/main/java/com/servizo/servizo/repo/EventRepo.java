package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.Event;

public interface EventRepo extends JpaRepository<Event, Long> {

}