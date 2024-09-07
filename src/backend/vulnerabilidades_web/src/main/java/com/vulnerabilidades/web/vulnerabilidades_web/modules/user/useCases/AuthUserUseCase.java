package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

import javax.naming.AuthenticationException;

import java.time.Duration;
import java.time.Instant;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Value;

@Service
public class AuthUserUseCase {
    @Value("${security.token.secret.user}")
    private String secretKey;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public AuthUserResponseDTO execute(AuthUserRequestDTO authUserRequestDTO) throws AuthenticationException {
        // Encontrar o usuário pelo username
        UserEntity user = this.userRepository.findByUsername(authUserRequestDTO.username())
            .orElseThrow(() -> { throw new UsernameNotFoundException("Username/password incorrect"); });

        // Verificar se a senha corresponde
        boolean passwordMatches = this.passwordEncoder.matches(authUserRequestDTO.password(), user.getPassword());
        if (!passwordMatches) throw new AuthenticationException();

        // Definir as roles do usuário
        List<String> roles = new ArrayList<>();
        roles.add("USER"); // Todos os usuários têm o papel USER
        if (user.isAdmin()) {
            roles.add("ADMIN"); // Adicionar o papel ADMIN se o usuário for um administrador
        }

        // Criar o token JWT
        Algorithm algorithm = Algorithm.HMAC256(secretKey);
        Instant expiresIn = Instant.now().plus(Duration.ofHours(2));
        String token = JWT.create()
            .withIssuer("web-vulnerabilities")
            .withSubject(user.getUsername())
            .withClaim("roles", roles)
            .withExpiresAt(expiresIn)
            .sign(algorithm);

        // Retornar o DTO de resposta com o token e o tempo de expiração
        AuthUserResponseDTO authUserResponseDTO = AuthUserResponseDTO.builder()
            .access_token(token)
            .expires_in(expiresIn.toEpochMilli())
            .build();

        return authUserResponseDTO;
    }
}
