package com.servizo.servizo.config;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.servizo.servizo.service.RoleService;

@Configuration
public class DataInit {
    private final RoleService roleService;

    public DataInit(RoleService roleService) {
        this.roleService = roleService;
    }

    @Bean
    public ApplicationRunner initializer() {
        return args -> {
            roleService.init_table();
            System.out.println("Initialized All of the Table");
        };
    }
}
