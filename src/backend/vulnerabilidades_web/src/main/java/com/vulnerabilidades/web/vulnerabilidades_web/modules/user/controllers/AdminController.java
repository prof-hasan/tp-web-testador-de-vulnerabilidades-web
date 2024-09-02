package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.UserProfileDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private UserRepository userRepository;

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/all")
    public ResponseEntity<Object> getAllUsers() {
        try {
            List<UserEntity> users = this.userRepository.findAll();
    
            List<UserProfileDTO> userDTOs = users.stream()
                                            .map(user -> new UserProfileDTO(
                                                user.getUsername(),
                                                user.getAge(),
                                                user.getJob(),
                                                user.getCreatedAt()
                                            ))
                                            .collect(Collectors.toList());
            return ResponseEntity.ok().body(userDTOs);
        }
        catch(Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
