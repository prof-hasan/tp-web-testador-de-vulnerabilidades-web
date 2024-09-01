package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories;

import java.util.Optional;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;

public interface BankingInformationRepository extends JpaRepository<BankingInformationEntity, UUID> {
    Optional<BankingInformationEntity> findByAgenciaAndNumConta(int agencia, int numConta);
}
