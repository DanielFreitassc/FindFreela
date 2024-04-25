package com.danielfreitassc.backend.models;

import java.io.Serializable;
import java.time.LocalDate;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.hateoas.RepresentationModel;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;  
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tb_posts")
public class PostEntity extends RepresentationModel<PostEntity> implements Serializable {
    private static final Long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_post;
    private String titulo;
    @Column(length = 20000)
    private String descricao;
    @CreationTimestamp
    @JsonFormat(pattern = "dd/MM/yyyy")
    private LocalDate data;
    private String nome;
    
}
