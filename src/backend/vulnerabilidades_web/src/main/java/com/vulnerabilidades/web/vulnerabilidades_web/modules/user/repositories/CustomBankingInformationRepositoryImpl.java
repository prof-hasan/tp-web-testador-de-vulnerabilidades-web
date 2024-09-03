package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.Query;

import java.util.List;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;

public class CustomBankingInformationRepositoryImpl implements CustomBankingInformationRepository {
    @PersistenceContext
    private EntityManager entityManager;

    @Override
    public List<BankingInformationEntity> findByAccountNumberAndBranchNumberVulnerable(String accountNumber, String branchNumber) {
        String queryStr = "SELECT * FROM banking_information WHERE account_number = '" + accountNumber + "' AND branch_number = '" + branchNumber + "'";
        System.out.println(queryStr);
        Query query = this.entityManager.createNativeQuery(queryStr, BankingInformationEntity.class);
        return query.getResultList();
    }
}
