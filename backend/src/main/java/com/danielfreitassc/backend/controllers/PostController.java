package com.danielfreitassc.backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielfreitassc.backend.dtos.PostRecordDTO;
import com.danielfreitassc.backend.models.PostEntity;
import com.danielfreitassc.backend.services.PostService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("post")
public class PostController {
    @Autowired
    private PostService postService;


    @PostMapping
    public ResponseEntity<PostEntity> savePost(@RequestBody @Valid PostRecordDTO postRecordDTO) {
        return postService.savePost(postRecordDTO);
    }

    @GetMapping
    public ResponseEntity<List<PostEntity>> getAllPosts() {
        return postService.getAllPosts();
    }

    @GetMapping("{id_post}")
    public ResponseEntity<Object> getOnePost(@PathVariable(value = "id_post") Long id_post) {
        return postService.getOnePost(id_post);
    } 

    @PutMapping("{id_post}")
    public ResponseEntity<Object> updatePost(@PathVariable(value = "id_post")Long id_post, @RequestBody @Valid PostRecordDTO postRecordDTO) {
        return postService.updatePost(id_post, postRecordDTO);
    }
}
