package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories;

import java.util.List;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.entities.BankingInformationEntity;

public interface CustomBankingInformationRepository {
    List<BankingInformationEntity> findByAccountNumberAndBranchNumberVulnerable(String accountNumber, String branchNumber);
}
