package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Table;
import com.servizo.servizo.repo.TableRepo;

@Service
public class TableService {
    @Autowired
    private TableRepo tableRepo;

    public List<Table> getAll() {
        return tableRepo.findAll();
    }

    public Table save(Table table) {
        return tableRepo.save(table);
    }
}


