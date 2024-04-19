package com.danielfreitassc.backend.dtos;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record PostRecordDTO(
    @NotBlank String titulo, 
    @NotBlank String descricao, 
    @JsonFormat(pattern = "dd/MM/yyyy") LocalDate data
    ) {
    
}
