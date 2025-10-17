package com.servizo.servizo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.User;

public interface UserRepo extends JpaRepository<User, Long> {
    User findByEmail(String email);
}
