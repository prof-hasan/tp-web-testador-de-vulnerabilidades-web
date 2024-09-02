package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.UserEntity;

public interface UserRepository extends JpaRepository<UserEntity, String> {
    Optional<UserEntity> findByUsername(String username);
}
