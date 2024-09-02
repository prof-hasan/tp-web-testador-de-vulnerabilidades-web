package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.MessagesEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.MessagesRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;
import com.vulnerabilidades.web.vulnerabilidades_web.exceptions.UserNotFoundException;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateMessageRequestDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.CreateMessageResponseDTO;

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
    public ResponseEntity<Object> create(@Valid @RequestBody CreateMessageRequestDTO createMessageDTO, HttpServletRequest request) {
        try {
            var username = request.getAttribute("username").toString();

            UserEntity user = userRepository.findByUsername(username)
                                .orElseThrow(() -> new UserNotFoundException());

            var messageEntity = MessagesEntity.builder()
                                    .message(createMessageDTO.getMessage())
                                    .user(user)
                                    .username(user.getUsername())
                                    .build();

            MessagesEntity savedMessage = messagesRepository.save(messageEntity);
            CreateMessageResponseDTO messageResponseDTO = CreateMessageResponseDTO.builder()
                                                            .message(savedMessage.getMessage())
                                                            .username(savedMessage.getUsername())
                                                            .build();

            return ResponseEntity.ok().body(messageResponseDTO);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }
}
