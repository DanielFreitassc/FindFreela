package com.danielfreitassc.backend.dtos;

import com.danielfreitassc.backend.models.UserRole;

public record RegisterRecordDTO(String nome, String login, String password, UserRole role) {
    
}