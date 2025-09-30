package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Event;
import com.servizo.servizo.repo.EventRepo;

@Service
public class EventService {
    @Autowired
    private EventRepo eventRepo;

    public List<Event> getEvents() {
        return eventRepo.findAll();
    }

    public Event saveEvent(Event event) {
        return eventRepo.save(event);
    }
}
