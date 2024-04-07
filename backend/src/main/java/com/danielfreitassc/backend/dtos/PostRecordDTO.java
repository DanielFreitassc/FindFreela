package com.danielfreitassc.backend.dtos;

import java.time.LocalDate;

import com.danielfreitassc.backend.models.UserEntity;

public record PostRecordDTO(String titulo, String descricao, LocalDate data, UserEntity usuario) {
    
}
