package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.UUID;
import java.util.Date;

import org.hibernate.annotations.CreationTimestamp;

@Data
@Entity(name = "messages")
public class MessagesEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @NotNull
    @ManyToOne
    @JoinColumn(name = "username", referencedColumnName = "username")
    private UserEntity user;

    @NotNull
    private String message;

    @CreationTimestamp
    private Date createdAt;
}
