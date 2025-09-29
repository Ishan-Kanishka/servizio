package com.servizo.servizo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.servizo.servizo.model.Role;
import com.servizo.servizo.repo.RoleRepo;
import com.servizo.servizo.utils.Roles;

@Service
public class RoleService {
    @Autowired
    private RoleRepo roleRepo;

    public List<Role> getRoles() {
        return roleRepo.findAll();
    }

    public Role saveRole(Role role) {
        return roleRepo.save(role);
    }

    public Role getRoleById(Integer id) {
        return roleRepo.findById(id).orElse(null);
    }

    public Role updateRole(int id, Role role) {
        Role old_role = roleRepo.findById(id).orElse(null);
        if (old_role == null)
            return null;

        old_role.setRoleName(role.getRoleName());
        return roleRepo.save(old_role);
    }

    public void init_table() {
        if (roleRepo.count() != 0)
            return;
        List<Role> roles = List.of(
                new Role(0, Roles.ADMIN.getRole_name()),
                new Role(0, Roles.CUSTOMER.getRole_name()),
                new Role(0, Roles.CHEF.getRole_name()),
                new Role(0, Roles.CASHIER.getRole_name()),
                new Role(0, Roles.MANAGER.getRole_name()),
                new Role(0, Roles.EVENT_COORDINATOR.getRole_name()),
                new Role(0, Roles.GUEST.getRole_name()));
        roleRepo.saveAll(roles);
    }
}
