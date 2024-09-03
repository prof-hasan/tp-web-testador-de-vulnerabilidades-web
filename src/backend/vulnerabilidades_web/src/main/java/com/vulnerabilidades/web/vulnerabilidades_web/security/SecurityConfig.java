package com.vulnerabilidades.web.vulnerabilidades_web.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

@Configuration
@EnableMethodSecurity
public class SecurityConfig {
    @Autowired
    private CreateMessageRequestFilter jwtCreateMessageRequestFilter;

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http.csrf(csrf -> csrf.disable())
            .authorizeHttpRequests(auth -> {
                auth
                .requestMatchers("/user/message").authenticated()
                .requestMatchers("/user/bank").authenticated()
                .requestMatchers("/user/bank/vulnerable/").permitAll()
                .requestMatchers("/admin/all/hard").hasRole("ADMIN")
                .requestMatchers("/admin/all/easy").permitAll()
                .anyRequest().permitAll();
            })
            .addFilterBefore(jwtCreateMessageRequestFilter, BasicAuthenticationFilter.class)
            .cors(Customizer.withDefaults());
        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}
