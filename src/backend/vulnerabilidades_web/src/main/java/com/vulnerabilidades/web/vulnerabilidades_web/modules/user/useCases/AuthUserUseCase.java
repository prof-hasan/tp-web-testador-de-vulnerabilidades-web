package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

import javax.naming.AuthenticationException;

import java.time.Duration;
import java.time.Instant;
import java.util.Arrays;

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
        var user = this.userRepository.findByUsername(authUserRequestDTO.username())
            .orElseThrow(() -> { throw new UsernameNotFoundException("Username/password incorrect"); });
        var passwordMatches = this.passwordEncoder.matches(authUserRequestDTO.password(), user.getPassword());

        if(!passwordMatches) throw new AuthenticationException();

        Algorithm algorithm = Algorithm.HMAC256(secretKey);
        var expiresIn = Instant.now().plus(Duration.ofHours(2));
        var token = JWT.create()
            .withIssuer("web-vulnerabilities")
            .withSubject(user.getUsername())
            .withClaim("roles", Arrays.asList("USER"))
            .withExpiresAt(expiresIn)
            .sign(algorithm);
        var authUserResponseDTO = AuthUserResponseDTO.builder()
                        .access_token(token).expires_in(expiresIn.toEpochMilli())
                        .build();
        return authUserResponseDTO;
    }
}
