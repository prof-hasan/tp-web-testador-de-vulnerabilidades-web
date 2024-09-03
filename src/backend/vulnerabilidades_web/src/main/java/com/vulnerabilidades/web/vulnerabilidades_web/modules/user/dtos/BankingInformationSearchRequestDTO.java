package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankingInformationSearchRequestDTO {
    private String accountNumber;
    private String branchNumber;
}
