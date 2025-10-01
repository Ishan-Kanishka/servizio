package com.servizo.servizo.repo;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.servizo.servizo.model.Role;

public interface RoleRepo extends JpaRepository<Role, Integer> {
    Optional<Role> findByRoleName(String roleName);
}
