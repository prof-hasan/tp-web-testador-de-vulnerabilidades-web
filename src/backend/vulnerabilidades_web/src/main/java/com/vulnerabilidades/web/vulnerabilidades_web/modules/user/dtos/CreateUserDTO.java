package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import org.hibernate.validator.constraints.Length;

import lombok.Data;

@Data
public class CreateUserDTO {

    @Pattern(regexp = "^[^\\s]+$", message = "O campo [username] não deve conter espaços")
    private String username;

    @Length(min = 4, max = 100)
    private String password;

    private String job;

    @Min(value = 7, message = "A idade mínima permitida é 7 anos")
    @Max(value = 120, message = "A idade máxima permitida é 120 anos")
    private int age;

    @NotNull
    @Digits(integer = 4, fraction = 0)
    @Min(value = 0, message = "A agência não pode ser um número negativo")
    private int agencia;

    @NotNull
    @Digits(integer = 5, fraction = 0)
    @Min(value = 0, message = "O número da conta não pode ser um número negativo")
    private int numConta;

    @Digits(integer = 1, fraction = 0)
    @Min(value = 0, message = "O dígito não pode ser um número negativo")
    private int digito;

    @Length(min = 6)
    private String secret;

    @Min(value = 0, message = "O saldo deve ser zero ou positivo")
    private float saldo;
}
