package com.danielfreitassc.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitassc.backend.infra.security.TokenService;

import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/validation")
public class ValidationController {

    @Autowired
    private TokenService tokenService;

    @GetMapping
    public ResponseEntity<String> validation(HttpServletRequest request) {
        String token = extractToken(request);
        String nome = tokenService.getNome(token);
        // return ResponseEntity.ok(nome);
        return ResponseEntity.ok().body("{\"nome\": \"" + nome + "\"}");
    }

    private String extractToken(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");
        return (authHeader != null && authHeader.startsWith("Bearer ")) ? authHeader.substring(7) : null;
    }
}
