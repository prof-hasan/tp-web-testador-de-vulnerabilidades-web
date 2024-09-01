package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

@Service
public class CreateUserUseCase {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public UserEntity execute(CreateUserDTO userDTO) {
        this.userRepository
            .findByUsername(userDTO.getUsername())
            .ifPresent((user) -> {
                throw new UserFoundException();
            });

        // Mapeando UserDTO para UserEntity
        UserEntity userEntity = new UserEntity();
        userEntity.setUsername(userDTO.getUsername());
        userEntity.setPassword(passwordEncoder.encode(userDTO.getPassword()));
        userEntity.setJob(userDTO.getJob());
        userEntity.setAge(userDTO.getAge());

        // Mapeando dados bancários
        BankingInformationEntity bankingInformation = new BankingInformationEntity();
        bankingInformation.setAgencia(userDTO.getAgencia());
        bankingInformation.setNumConta(userDTO.getNumConta());
        bankingInformation.setDigito(userDTO.getDigito());
        bankingInformation.setSecret(userDTO.getSecret());
        bankingInformation.setSaldo(userDTO.getSaldo());
        bankingInformation.setUser(userEntity);

        // Configurando a relação um-para-um
        userEntity.setBankingInformation(bankingInformation);

        return this.userRepository.save(userEntity);
    }
}
