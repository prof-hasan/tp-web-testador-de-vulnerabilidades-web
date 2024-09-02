package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.BankAccountFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.BankingInformationRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

@Service
public class CreateUserUseCase {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BankingInformationRepository bankingInformationRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public CreateUserResponseDTO execute(CreateUserRequestDTO createUserRequestDTO) {
        this.userRepository
            .findByUsername(createUserRequestDTO.getUsername())
            .ifPresent((user) -> {
                throw new UserFoundException();
            });
        
        this.bankingInformationRepository
        .findByAgenciaAndNumConta(createUserRequestDTO.getAgencia(), createUserRequestDTO.getNumConta())
        .ifPresent((account) -> {
            throw new BankAccountFoundException();
        });
        
        // Criar e preencher a entidade UserEntity
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(createUserRequestDTO.getUsername());
        userEntity.setAdmin(false);
        
        var password = passwordEncoder.encode(createUserRequestDTO.getPassword());
        userEntity.setPassword(password);
        userEntity.setJob(createUserRequestDTO.getJob());
        userEntity.setAge(createUserRequestDTO.getAge());

        // Criar e preencher a entidade BankingInformationEntity
        BankingInformationEntity bankingInformation = new BankingInformationEntity();
        bankingInformation.setAgencia(createUserRequestDTO.getAgencia());
        bankingInformation.setNumConta(createUserRequestDTO.getNumConta());
        bankingInformation.setDigito(createUserRequestDTO.getDigito());
        bankingInformation.setSecret(createUserRequestDTO.getSecret());
        bankingInformation.setSaldo(createUserRequestDTO.getSaldo());
        bankingInformation.setUser(userEntity);

        // Associar a conta bancária ao usuário
        userEntity.setBankingInformation(bankingInformation);

        // Salvar o usuário e suas informações bancárias no banco de dados
        UserEntity savedUser = this.userRepository.save(userEntity);

        // Construir o DTO de resposta
        CreateUserResponseDTO responseDTO = new CreateUserResponseDTO();
        responseDTO.setUsername(savedUser.getUsername());
        responseDTO.setJob(savedUser.getJob());
        responseDTO.setAge(savedUser.getAge());
        responseDTO.setPassword(password);

        // Mapear informações bancárias
        BankingInformationEntity savedBankingInfo = savedUser.getBankingInformation();
        if (savedBankingInfo != null) {
            responseDTO.setAgencia(savedBankingInfo.getAgencia());
            responseDTO.setNumConta(savedBankingInfo.getNumConta());
            responseDTO.setDigito(savedBankingInfo.getDigito());
            responseDTO.setSecret(savedBankingInfo.getSecret());
            responseDTO.setSaldo(savedBankingInfo.getSaldo());
        }

        return responseDTO;
    }
}
