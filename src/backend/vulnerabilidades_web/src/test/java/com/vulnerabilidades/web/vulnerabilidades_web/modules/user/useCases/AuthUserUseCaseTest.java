package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import com.auth0.jwt.algorithms.Algorithm;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.AuthUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.naming.AuthenticationException;
import java.util.Optional;

class AuthUserUseCaseTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private AuthUserUseCase authUserUseCase;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void shouldThrowUsernameNotFoundException() {
        // Arrange
        String username = "invalidUser";
        String password = "testPassword";
        
        when(userRepository.findByUsername(username)).thenReturn(Optional.empty());
        
        AuthUserRequestDTO authUserRequestDTO = new AuthUserRequestDTO(username, password);
        
        // Act & Assert
        assertThrows(UsernameNotFoundException.class, () -> authUserUseCase.execute(authUserRequestDTO));
        
        verify(userRepository, times(1)).findByUsername(username);
        verify(passwordEncoder, times(0)).matches(anyString(), anyString());
    }

    @Test
    void shouldThrowAuthenticationExceptionForInvalidPassword() {
        // Arrange
        String username = "testUser";
        String password = "invalidPassword";
        UserEntity user = new UserEntity();
        user.setUsername(username);
        user.setPassword("encodedPassword");
        
        when(userRepository.findByUsername(username)).thenReturn(Optional.of(user));
        when(passwordEncoder.matches(password, user.getPassword())).thenReturn(false);
        
        AuthUserRequestDTO authUserRequestDTO = new AuthUserRequestDTO(username, password);
        
        // Act & Assert
        assertThrows(AuthenticationException.class, () -> authUserUseCase.execute(authUserRequestDTO));
        
        verify(userRepository, times(1)).findByUsername(username);
        verify(passwordEncoder, times(1)).matches(password, user.getPassword());
    }
}
