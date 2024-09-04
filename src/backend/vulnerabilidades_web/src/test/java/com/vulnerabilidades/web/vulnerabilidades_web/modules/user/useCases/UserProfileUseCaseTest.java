package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.time.LocalDateTime;
import java.util.Optional;

import java.sql.Date;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.UserProfileDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

public class UserProfileUseCaseTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserProfileUseCase userProfileUseCase;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testExecute_UserFound() {
        // Arrange
        String username = "testUser";
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(username);
        userEntity.setAge(30);
        userEntity.setJob("Developer");
        userEntity.setCreatedAt(Date.valueOf(LocalDateTime.now().toLocalDate()));

        when(userRepository.findByUsername(username)).thenReturn(Optional.of(userEntity));

        // Act
        UserProfileDTO result = userProfileUseCase.execute(username);

        // Assert
        assertNotNull(result);
        assertEquals(username, result.getUsername());
        assertEquals(30, result.getAge());
        assertEquals("Developer", result.getJob());
        assertEquals(userEntity.getCreatedAt(), result.getCreatedAt());
    }

    @Test
    void testExecute_UserNotFound() {
        // Arrange
        String username = "nonExistentUser";
        when(userRepository.findByUsername(username)).thenReturn(Optional.empty());

        // Act & Assert
        assertThrows(UsernameNotFoundException.class, () -> userProfileUseCase.execute(username));
    }
}
