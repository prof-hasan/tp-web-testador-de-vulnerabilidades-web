package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.MessagesEntity;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.MessagesRepository;

public class CreateMessageUseCase {
    @Autowired
    private MessagesRepository messagesRepository;

    public MessagesEntity execute(MessagesEntity messagesEntity) {
        return this.messagesRepository.save(messagesEntity);
    }
}
