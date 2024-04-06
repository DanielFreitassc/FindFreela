package com.danielfreitassc.backend.dtos;

import com.danielfreitassc.backend.models.UserRole;

public record RegisterRecordDTO(String login , String password, UserRole role) {
    
}