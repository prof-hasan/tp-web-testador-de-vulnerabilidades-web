package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.BankAccountFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.BankingInformationRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

public class CreateUserUseCaseTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private BankingInformationRepository bankingInformationRepository;

    @Mock
    private PasswordEncoder passwordEncoder;

    @InjectMocks
    private CreateUserUseCase createUserUseCase;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void testExecute_UserAlreadyExists() {
        // Arrange
        CreateUserRequestDTO requestDTO = new CreateUserRequestDTO();
        requestDTO.setUsername("existingUser");

        when(userRepository.findByUsername("existingUser")).thenReturn(Optional.of(new UserEntity()));

        // Act & Assert
        assertThrows(UserFoundException.class, () -> createUserUseCase.execute(requestDTO));
    }

    @Test
    void testExecute_BankAccountAlreadyExists() {
        // Arrange
        CreateUserRequestDTO requestDTO = new CreateUserRequestDTO();
        requestDTO.setUsername("newUser");
        requestDTO.setBranchNumber("12345");
        requestDTO.setAccountNumber("67890");

        when(userRepository.findByUsername("newUser")).thenReturn(Optional.empty());
        when(bankingInformationRepository.findByBranchNumberAndAccountNumber("12345", "67890"))
            .thenReturn(Optional.of(new BankingInformationEntity()));

        // Act & Assert
        assertThrows(BankAccountFoundException.class, () -> createUserUseCase.execute(requestDTO));
    }

    @Test
    void testExecute_SuccessfulCreation() {
        // Arrange
        CreateUserRequestDTO requestDTO = new CreateUserRequestDTO();
        requestDTO.setUsername("newUser");
        requestDTO.setPassword("password");
        requestDTO.setBranchNumber("12345");
        requestDTO.setAccountNumber("67890");
        requestDTO.setJob("Developer");
        requestDTO.setAge(25);
        requestDTO.setDigit(1);
        requestDTO.setSecret("secret");
        requestDTO.setBalance(1000.0f);

        when(userRepository.findByUsername("newUser")).thenReturn(Optional.empty());
        when(bankingInformationRepository.findByBranchNumberAndAccountNumber("12345", "67890"))
                .thenReturn(Optional.empty());
        when(passwordEncoder.encode("password")).thenReturn("encodedPassword");
        when(userRepository.save(any(UserEntity.class))).thenAnswer(i -> i.getArgument(0));

        // Act
        CreateUserResponseDTO responseDTO = createUserUseCase.execute(requestDTO);

        // Assert
        assertNotNull(responseDTO);
        assertEquals("newUser", responseDTO.getUsername());
        assertEquals("encodedPassword", responseDTO.getPassword());
        assertEquals("Developer", responseDTO.getJob());
        assertEquals(25, responseDTO.getAge());
        assertEquals("12345", responseDTO.getBranchNumber());
        assertEquals("67890", responseDTO.getAccountNumber());
        assertEquals(1, responseDTO.getDigit());
        assertEquals("secret", responseDTO.getSecret());
        assertEquals(1000.0, responseDTO.getBalance());
    }
}
