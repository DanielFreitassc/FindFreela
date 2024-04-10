package com.danielfreitassc.backend.repositories;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

import com.danielfreitassc.backend.models.UserEntity;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {
    UserDetails findByLogin(String login);
}
