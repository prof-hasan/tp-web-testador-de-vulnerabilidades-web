package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CreateMessageResponseDTO {
    @NotBlank
    private String message;

    @NotBlank
    private String username;
}
