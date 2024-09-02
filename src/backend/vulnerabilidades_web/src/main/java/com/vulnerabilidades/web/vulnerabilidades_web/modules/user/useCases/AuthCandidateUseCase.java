package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

import lombok.Value;

public class AuthCandidateUseCase {
    @Value("${security.token.secret.user}")
    private String secretKey;

    @Autowired
    private UserRepository userRepository;
}
