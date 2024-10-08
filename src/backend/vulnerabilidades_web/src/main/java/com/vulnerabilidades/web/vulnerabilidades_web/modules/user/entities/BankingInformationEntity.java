package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities;

import java.util.UUID;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.validation.constraints.Digits;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity(name = "banking_information")
public class BankingInformationEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull
    @Length(min = 4, max = 4)
    private String branchNumber;

    @NotNull
    @Length(min = 5, max = 5)
    private String accountNumber;

    @Digits(integer = 1, fraction = 0)
    @Min(value = 0, message = "O dígito não pode ser um número negativo")
    private int digit;

    @Pattern(regexp = "\\d+", message = "Deve conter apenas números")
    @Length(min = 6)
    private String secret;

    @Min(value = 0, message = "O saldo deve ser zero ou positivo")
    private float balance;

    @OneToOne
    @JoinColumn(name = "username", nullable = false)
    private UserEntity user;
}
