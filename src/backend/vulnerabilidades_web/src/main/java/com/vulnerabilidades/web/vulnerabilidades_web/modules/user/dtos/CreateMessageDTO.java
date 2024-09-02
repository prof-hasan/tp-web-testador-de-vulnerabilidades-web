package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class CreateMessageDTO {
    @NotNull
    @NotBlank
    private String message;
}
