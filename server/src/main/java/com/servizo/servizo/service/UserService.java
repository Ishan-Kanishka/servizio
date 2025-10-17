package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.User;
import com.servizo.servizo.repo.UserRepo;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User save(User user) {
        return userRepo.save(user);
    }

    public User login(String email, String password) {
        User user = userRepo.findByEmail(email);
        System.out.println("Attempting login for email: " + email);
        System.out.println("Retrieved user: " + user);
        if (user != null && user.getPassword().equals(password)) {
            return user;
        }
        return null;
    }
}
