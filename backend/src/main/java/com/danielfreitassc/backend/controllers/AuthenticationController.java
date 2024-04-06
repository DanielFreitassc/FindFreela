package com.danielfreitassc.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitassc.backend.dtos.AuthenticationRecordDTO;
import com.danielfreitassc.backend.dtos.LoginResponseDTO;
import com.danielfreitassc.backend.dtos.RegisterRecordDTO;
import com.danielfreitassc.backend.infra.security.TokenService;
import com.danielfreitassc.backend.models.UserEntity;
import com.danielfreitassc.backend.repositories.UserRepository;

import jakarta.validation.Valid;

@RestController
@RequestMapping("auth")
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;
    
    
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationRecordDTO data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((UserEntity)auth.getPrincipal());

        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

   
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterRecordDTO data ) {
        if(this.userRepository.findByLogin(data.login()) != null) return ResponseEntity.badRequest().build();

        String encryptedPassword = new BCryptPasswordEncoder().encode(data.password());
        UserEntity newUser = new UserEntity(data.login(), encryptedPassword, data.role());
        
        this.userRepository.save(newUser);

        return ResponseEntity.ok().build();
    }
}
