package com.danielfreitassc.backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.danielfreitassc.backend.controllers.PostController;
import com.danielfreitassc.backend.dtos.PostRecordDTO;
import com.danielfreitassc.backend.models.PostEntity;
import com.danielfreitassc.backend.repositories.PostRepository;

import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.linkTo;
import static org.springframework.hateoas.server.mvc.WebMvcLinkBuilder.methodOn;
@Service
public class PostService {
    @Autowired
    private PostRepository postRepository;
    
    public ResponseEntity<PostEntity> savePost(PostRecordDTO postRecordDTO) {
        String username = SecurityContextHolder.getContext().getAuthentication().getName();
        PostEntity postEntity = new PostEntity();
        postEntity.setNome(username);
        BeanUtils.copyProperties(postRecordDTO, postEntity);
        return ResponseEntity.status(HttpStatus.CREATED).body(postRepository.save(postEntity));
    } 

    public ResponseEntity<List<PostEntity>> getAllPosts() {
        List<PostEntity> posts = postRepository.findAll();
        if(!posts.isEmpty()) {
            for(PostEntity postEntity : posts) {
                Long id_post = postEntity.getId_post();
                postEntity.add(linkTo(methodOn(PostController.class).getOnePost(id_post)).withSelfRel());
            }
        }
        return ResponseEntity.status(HttpStatus.OK).body(posts);
    }

    public ResponseEntity<Object> getOnePost(Long id_post) {
        Optional<PostEntity> post = postRepository.findById(id_post);
        if(post.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum post com este id");
        }
        post.get().add(linkTo(methodOn(PostController.class).getAllPosts()).withRel("Lista de posts"));
        return ResponseEntity.status(HttpStatus.OK).body(post);
    }

    public ResponseEntity<Object> updatePost(Long id_post, PostRecordDTO postRecordDTO) {
        Optional<PostEntity> post = postRepository.findById(id_post);
        if(post.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum post com este id");
        }
        PostEntity postEntity = post.get();
        BeanUtils.copyProperties(postRecordDTO, postEntity);
        return ResponseEntity.status(HttpStatus.OK).body(postRepository.save(postEntity));
    }

    public ResponseEntity<Object> deletePost(Long id_post) {
        Optional<PostEntity> post = postRepository.findById(id_post);
        if(post.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Nenhum post com este id");
        }
        postRepository.delete(post.get());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
