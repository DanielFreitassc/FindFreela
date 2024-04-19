package com.danielfreitassc.backend.dtos;

import com.danielfreitassc.backend.models.UserRole;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record RegisterRecordDTO(
    @NotBlank String nome, 
    @Email @NotBlank String login, 
    @Size(min = 6) String password, 
    @NotNull UserRole role
    ) {
    
}