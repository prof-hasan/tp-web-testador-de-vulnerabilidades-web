package com.vulnerabilidades.web.vulnerabilidades_web.exceptions;

public class UserFoundException extends RuntimeException {
    public UserFoundException() {
        super("Usuário já existe");
    }
}
