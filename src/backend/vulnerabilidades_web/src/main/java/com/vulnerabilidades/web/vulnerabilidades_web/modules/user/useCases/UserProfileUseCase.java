package com.vulnerabilidades.web.vulnerabilidades_web.modules.user.useCases;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.dtos.UserProfileDTO;
import com.vulnerabilidades.web.vulnerabilidades_web.modules.user.repositories.UserRepository;

@Service
public class UserProfileUseCase {
    @Autowired
    private UserRepository userRepository;

    public UserProfileDTO execute(String username) {
        var user = this.userRepository.findByUsername(username)
                    .orElseThrow(() -> {
                        throw new UsernameNotFoundException("User not Found");
                    });
        var userDTO = UserProfileDTO.builder()
                        .age(user.getAge())
                        .username(username)
                        .createdAt(user.getCreatedAt())
                        .job(user.getJob())
                        .build();
        return userDTO;
    }
}
