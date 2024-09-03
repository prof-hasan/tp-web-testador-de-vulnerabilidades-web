package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.BankAccountNotFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.NoneBankAccountFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserNotFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.BankingInformationResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.BankingInformationRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/user/bank")
public class BankingInformationController {
    @Autowired
    private UserRepository userRepository;

    @Autowired 
    private BankingInformationRepository bankingInformationRepository;

    @GetMapping("/")
    public ResponseEntity<Object> getUserBankingInfo(HttpServletRequest request) {
        try {
            var username = request.getAttribute("username").toString();
            UserEntity userEntity = this.userRepository.findByUsername(username)
                                        .orElseThrow(() -> new UserNotFoundException());
            BankingInformationEntity bankingInformationEntity = this.bankingInformationRepository.findByUser(userEntity)
                                                .orElseThrow(() -> new BankAccountNotFoundException());
            BankingInformationResponseDTO bankingInformationResponseDTO = BankingInformationResponseDTO.builder()
                                                                            .branchNumber(bankingInformationEntity.getBranchNumber())
                                                                            .accountNumber(bankingInformationEntity.getAccountNumber())
                                                                            .balance(bankingInformationEntity.getBalance())
                                                                            .secret(bankingInformationEntity.getSecret())
                                                                            .digit(bankingInformationEntity.getDigit())
                                                                            .build();
            return ResponseEntity.ok().body(bankingInformationResponseDTO);
        }
        catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/vulnerable")
    public ResponseEntity<Object> getVulnerableBankingInfo(@RequestParam String accountNumber, @RequestParam String branchNumber) {
        try {
            List<BankingInformationEntity> bankingInformationEntities =
                    bankingInformationRepository.findByAccountNumberAndBranchNumberVulnerable(accountNumber, branchNumber);

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

}
