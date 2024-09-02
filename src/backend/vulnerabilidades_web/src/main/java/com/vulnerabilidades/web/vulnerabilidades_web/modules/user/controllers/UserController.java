package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateUserResponseDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases.CreateUserUseCase;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private CreateUserUseCase createUserUseCase;

    @PostMapping("/")
    public ResponseEntity<Object> create(@Valid @RequestBody CreateUserRequestDTO userDTO) {
        try {
            CreateUserResponseDTO result = this.createUserUseCase.execute(userDTO);
            return ResponseEntity.ok().body(result);
        }
        catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    /*
    @GetMapping("/")
    public ResponseEntity<Object> get(HttpServletRequest request) {
        var user = request.getAttribute("username");
        try {
            var profile = 
        }
    }
        */
}
