package com.vulnerabilidades.web.vulnerabilidades_web.exceptions;

public class UserNotFoundException extends RuntimeException {
    public UserNotFoundException() {
        super("User not found");
    }
}
