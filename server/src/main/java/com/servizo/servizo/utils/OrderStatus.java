package com.servizo.servizo.utils;

public enum OrderStatus {
    PENDING, // Order created, not yet confirmed
    CONFIRMED, // Confirmed by cashier/restaurant
    IN_PROGRESS, // Being prepared (chef started)
    READY, // Ready to be served or picked up
    COMPLETED, // Order served and completed
    CANCELLED, // Cancelled by customer or staff
    FAILED // Payment or processing failure
}
