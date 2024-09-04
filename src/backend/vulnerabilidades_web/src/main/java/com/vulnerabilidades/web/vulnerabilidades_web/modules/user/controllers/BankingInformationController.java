package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.BankAccountNotFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserNotFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.BankingInformationResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.BankingInformationSearchRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.BankingInformationRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*", exposedHeaders = "Authorization")
@RequestMapping("/user/bank")
public class BankingInformationController {
    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private BankingInformationRepository bankingInformationRepository;

    @GetMapping("/")
    public ResponseEntity<Object> getUserBankingInfo() {
        try {
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            UserEntity userEntity = this.userRepository.findByUsername(username)
                                        .orElseThrow(() -> new UserNotFoundException());

            BankingInformationEntity bankingInformationEntity = this.bankingInformationRepository.findByUser(userEntity)
                                                .orElseThrow(() -> new BankAccountNotFoundException());

            BankingInformationResponseDTO bankingInformationResponseDTO = BankingInformationResponseDTO.builder()
                                                                            .branchNumber(bankingInformationEntity.getBranchNumber())
                                                                            .username(userEntity.getUsername())
                                                                            .accountNumber(bankingInformationEntity.getAccountNumber())
                                                                            .balance(bankingInformationEntity.getBalance())
                                                                            .secret(bankingInformationEntity.getSecret())
                                                                            .digit(bankingInformationEntity.getDigit())
                                                                            .build();

            return ResponseEntity.ok().body(bankingInformationResponseDTO);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/vulnerable")
    public ResponseEntity<Object> getVulnerableBankingInfo(@Valid @RequestBody BankingInformationSearchRequestDTO bankingInformationSearchRequestDTO) {
        try {
            List<BankingInformationEntity> bankingInformationEntities =
                    bankingInformationRepository.findByAccountNumberAndBranchNumberVulnerable(bankingInformationSearchRequestDTO.getAccountNumber(), bankingInformationSearchRequestDTO.getBranchNumber());

            if (bankingInformationEntities.isEmpty()) {
                return ResponseEntity.status(404).body("No banking information found.");
            }

            // Convertendo as entidades para DTOs
            List<BankingInformationResponseDTO> bankingInformationDTOs = bankingInformationEntities.stream()
                    .map(entity -> BankingInformationResponseDTO.builder()
                            .branchNumber(entity.getBranchNumber())
                            .accountNumber(entity.getAccountNumber())
                            .balance(entity.getBalance())
                            .secret(entity.getSecret())
                            .digit(entity.getDigit())
                            .build())
                    .collect(Collectors.toList());

            return ResponseEntity.ok().body(bankingInformationDTOs);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/protected")
    public ResponseEntity<Object> getProtectedBankingInfo(@Valid @RequestBody BankingInformationSearchRequestDTO bankingInformationSearchRequestDTO) {
        try {
            var bankingInformationEntities =
                    bankingInformationRepository.findByBranchNumberAndAccountNumber(bankingInformationSearchRequestDTO.getBranchNumber(), bankingInformationSearchRequestDTO.getAccountNumber())
                        .orElseThrow(() -> new BankAccountNotFoundException());

            // Convertendo as entidades para DTOs
            List<BankingInformationResponseDTO> bankingInformationDTOs = new ArrayList<>();
            var bankingResponse = BankingInformationResponseDTO.builder()
                                    .accountNumber(bankingInformationEntities.getAccountNumber())
                                    .balance(bankingInformationEntities.getBalance())
                                    .branchNumber(bankingInformationEntities.getBranchNumber())
                                    .digit(bankingInformationEntities.getDigit())
                                    .secret(bankingInformationEntities.getSecret())
                                    .build();
            bankingInformationDTOs.add(bankingResponse);
            return ResponseEntity.ok().body(bankingInformationDTOs);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

}
