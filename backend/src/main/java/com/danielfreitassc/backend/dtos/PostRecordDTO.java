package com.danielfreitassc.backend.dtos;

import java.time.LocalDate;

public record PostRecordDTO(String titulo, String descricao, LocalDate data, String nome) {
    
}
