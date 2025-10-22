package com.servizo.servizo.service;

import java.sql.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.DTO.EventRequestDTO;
import com.servizo.servizo.model.Customer;
import com.servizo.servizo.model.Event;
import com.servizo.servizo.repo.CustomerRepo;
import com.servizo.servizo.repo.EventRepo;

@Service
public class EventService {
    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private CustomerRepo customerRepo;

    public List<Event> getEvents() {
        return eventRepo.findAll();
    }

    public Event saveEvent(EventRequestDTO event) {
        Customer customer = customerRepo.findById(event.getUserId()).orElseThrow(
                () -> new RuntimeException("Customer not found with id: " + event.getUserId()));
        Event newEvent = new Event();
        newEvent.setDescription(event.getDescription());
        newEvent.setEventDate(event.getEventDate());
        newEvent.setNumOfPeople(event.getNumOfPeople());
        newEvent.setUpdatedAt(new Date(System.currentTimeMillis()));
        newEvent.setStatus(false);
        newEvent.setCustomer(customer);

        return eventRepo.save(newEvent);
    }

    public Event updateEvent(EventRequestDTO event) {
        Event existingEvent = eventRepo.findById(event.getEventId()).orElseThrow(
                () -> new RuntimeException("Event not found with id: " + event.getEventId()));
        existingEvent.setDescription(event.getDescription());
        existingEvent.setEventDate(event.getEventDate());
        existingEvent.setNumOfPeople(event.getNumOfPeople());
        existingEvent.setUpdatedAt(new Date(System.currentTimeMillis()));

        return eventRepo.save(existingEvent);
    }

    public void deleteEvent(Long eventId) {
        Event existingEvent = eventRepo.findById(eventId).orElseThrow(
                () -> new RuntimeException("Event not found with id: " + eventId));
        // 1. remove event from customer events list
        Customer customer = existingEvent.getCustomer();
        customer.getEvents().remove(existingEvent);
        customerRepo.save(customer);
        // 2. delete event
        eventRepo.delete(existingEvent);
    }
}
