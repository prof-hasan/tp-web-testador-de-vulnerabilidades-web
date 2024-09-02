package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.MessagesEntity;

public interface MessagesRepository extends JpaRepository<MessagesEntity, UUID> {
    
}
