package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.MessagesEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.MessagesRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateMessageDTO;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/user/message")
public class MessagesController {

    @Autowired
    private MessagesRepository messagesRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/")
    public ResponseEntity<Object> createMessage(@Valid @RequestBody CreateMessageDTO createMessageDTO, HttpServletRequest request) {
        try {
            var username = request.getAttribute("username");
            var messageEntity = MessagesEntity.builder()
                .message(createMessageDTO.getMessage())
                .user
        }
    }
}
