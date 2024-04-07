package com.danielfreitassc.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danielfreitassc.backend.models.PostEntity;

public interface PostRepository extends JpaRepository<PostEntity, Long>{
    
}
