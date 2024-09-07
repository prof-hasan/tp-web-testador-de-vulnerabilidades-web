package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import lombok.Data;

@Data
public class CreateUserResponseDTO {
    private String username;
    private String password;
    private String job;
    private int age;
    private String branchNumber;
    private String accountNumber;
    private int digit;
    private String secret;
    private float balance;
}
