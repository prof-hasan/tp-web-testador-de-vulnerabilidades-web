package com.vulnerabilidades.web.vulnerabilidades_web.exceptions;

public class NoneBankAccountFoundException extends RuntimeException {
    public NoneBankAccountFoundException() {
        super("None bank account was found");
    }
}
