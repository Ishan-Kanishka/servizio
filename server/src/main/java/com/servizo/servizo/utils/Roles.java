package com.servizo.servizo.utils;

public enum Roles {
    ADMIN("ADMIN"),
    CUSTOMER("CUSTOMER"),
    CHEF("CHEF"),
    CASHIER("CASHIER"),
    MANAGER("MANAGER"),
    EVENT_COORDINATOR("EVENT_COORDINATOR"),
    GUEST("GUEST");

    private final String role_name;

    Roles(String role_name) {
        this.role_name = role_name;
    }

    public String getRole_name() {
        return role_name;
    }

}
