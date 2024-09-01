package com.vulnerabilidades.web.vulnerabilidades_web.modules.user;

import java.sql.Date;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Pattern;
import lombok.Data;

@Data
@Entity(name = "user")
public class UserEntity {
    @Id
    @Pattern(regexp = "^[^\\s]+$", message = "O campo [username] não deve conter espaços")
    private String username;

    @Length(min = 4, max = 25)
    private String password;

    private String job;

    @Min(value = 7, message = "A idade mínima permitida é 7 anos")
    @Max(value = 120, message = "A idade máxima permitida é 120 anos")
    private int age;

    @CreationTimestamp
    private Date createdAt;
}
