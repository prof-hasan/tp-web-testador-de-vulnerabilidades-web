package com.vulnerabilidades.web.vulnerabilidades_web.exceptions;

public class BankAccountFoundException extends RuntimeException {
    public BankAccountFoundException() {
        super("Conta com mesma agência e número de conta já existente");
    }
}
