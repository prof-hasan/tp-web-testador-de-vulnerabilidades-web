package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import lombok.Data;

@Data
public class CreateUserRequestDTO {
    private String username;
    private String password;
    private String job;
    private int age;
    private int agencia;
    private int numConta;
    private int digit;
    private String secret;
    private float saldo;
}
