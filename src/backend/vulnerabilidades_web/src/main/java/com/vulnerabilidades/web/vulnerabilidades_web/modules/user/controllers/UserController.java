package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases.CreateUserUseCase;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases.UserProfileUseCase;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private CreateUserUseCase createUserUseCase;

    @Autowired
    private UserProfileUseCase userProfileUseCase;


    @PostMapping("/")
    public ResponseEntity<Object> create(@Valid @RequestBody CreateUserRequestDTO userDTO) {
        try {
            CreateUserResponseDTO result = this.createUserUseCase.execute(userDTO);
            return ResponseEntity.ok().body(result);
        }
        catch(Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @GetMapping("/")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity<Object> get() {
        try {
            // Obtém o nome do usuário autenticado a partir do SecurityContextHolder
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
            String username = authentication.getName();

            // Executa o caso de uso passando o nome de usuário
            var profile = this.userProfileUseCase.execute(username);
            return ResponseEntity.ok().body(profile);
        } 
        catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
