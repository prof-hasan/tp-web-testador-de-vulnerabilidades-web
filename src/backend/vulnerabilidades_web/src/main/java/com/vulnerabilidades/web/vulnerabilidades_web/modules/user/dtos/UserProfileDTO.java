package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class UserProfileDTO {
    private String username;
    private int age;
    private String job;
    private Date createdAt;
}
