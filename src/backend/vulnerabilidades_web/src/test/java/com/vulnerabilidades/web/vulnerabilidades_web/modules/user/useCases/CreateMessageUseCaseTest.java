package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;
import static org.mockito.ArgumentMatchers.any;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.MessagesEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.MessagesRepository;

public class CreateMessageUseCaseTest {

    @Mock
    private MessagesRepository messagesRepository;

    @InjectMocks
    private CreateMessageUseCase createMessageUseCase;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testExecute() {
        // Arrange
        MessagesEntity message = new MessagesEntity();
        message.setMessage("Test message");
        message.setUsername("user123");

        when(messagesRepository.save(any(MessagesEntity.class))).thenReturn(message);

        // Act
        MessagesEntity result = createMessageUseCase.execute(message);

        // Assert
        assertEquals("Test message", result.getMessage());
        assertEquals("user123", result.getUsername());
    }
}
