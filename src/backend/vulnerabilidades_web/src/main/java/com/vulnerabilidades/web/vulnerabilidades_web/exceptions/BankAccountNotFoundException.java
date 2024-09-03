package com.vulnerabilidades.web.vulnerabilidades_web.exceptions;

public class BankAccountNotFoundException extends RuntimeException {
    public BankAccountNotFoundException() {
        super("Conta bancária não encontrada");
    }
}
